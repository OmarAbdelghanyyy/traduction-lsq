import '../styles/dictionnaire.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

/* global YT */

export default function Dictionnaire() {
  const firebaseConfig = {
    apiKey: "AIzaSyDcoyMk0dEwaC-JQaWmjRnzk9qxRMoVjUk",
    authDomain: "lsq-traduction.firebaseapp.com",
    databaseURL: "https://lsq-traduction-default-rtdb.firebaseio.com",
    projectId: "lsq-traduction",
    storageBucket: "lsq-traduction.appspot.com",
    messagingSenderId: "150479486832",
    appId: "1:150479486832:web:a3b32f7b10cede5a3b99b5",
    measurementId: "G-6F3V6RYLL7"
};

firebase.initializeApp(firebaseConfig);

document.addEventListener('DOMContentLoaded', function () {
    const collapsibleBtns = document.querySelectorAll('.collapsible-btn');
    collapsibleBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            const icon = this.querySelector('i');
            if (content.style.display === 'grid') {
                content.style.display = 'none';
                icon.classList.remove('fa-chevron-circle-up');
                icon.classList.add('fa-chevron-circle-down');
            } else {
                content.style.display = 'grid';
                icon.classList.remove('fa-chevron-circle-down');
                icon.classList.add('fa-chevron-circle-up');
            }
        });
    });

    document.querySelectorAll('.nav-list a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const addWordBtn = document.querySelector('#add-word-button');

    if (addWordBtn) {
        addWordBtn.addEventListener('click', function () {
            const lsqWord = document.getElementById('lsq-word').value;
            const definition = document.getElementById('definition').value;
            const lsqEntry = document.getElementById('lsq-entry').value;

            if (!lsqWord) {
                alert('Please enter a word.');
                return;
            }

            const wordsRef = firebase.firestore().collection('words').doc(lsqWord);

            wordsRef.get().then((doc) => {
                if (doc.exists) {
                    const wordData = {};

                    if (definition) {
                        const isVideoLink = isVideo(definition);
                        if (isVideoLink) {
                            wordData.videos = [definition];
                        } else {
                            wordData.definition = definition;
                        }
                    }

                    if (lsqEntry) {
                        const isVideoLink = isVideo(lsqEntry);

                        if (isVideoLink) {
                            wordData.translations = [lsqEntry];
                        } else {
                            alert('In this section a video link should be provided')
                        }
                    }

                    wordsRef.update(wordData).then(() => {
                        alert('Word updated successfully.');
                    }).catch((error) => {
                        console.error('Error updating word:', error);
                    });
                } else {
                    const wordData = {};

                    if (definition) {
                        const isVideoLink = isVideo(definition);

                        if (isVideoLink) {
                            wordData.videos = [definition];
                        } else {
                            wordData.definition = definition;
                        }
                    }

                    if (lsqEntry) {
                        const isVideoLink = isVideo(lsqEntry);

                        if (isVideoLink) {
                            wordData.translations = [lsqEntry];
                        } else {
                            alert('In this section a video link should be provided')
                        }
                    }

                    wordsRef.set(wordData).then(() => {
                        alert('Word added successfully.');
                    }).catch((error) => {
                        console.error('Error adding word:', error);
                    });
                }
            }).catch((error) => {
                console.error('Error getting document:', error);
            });
        });
    }
});

function isVideo(url) {
    const youtubeRegExp = /^(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const mp4RegExp = /\.(mp4)$/i;
    return youtubeRegExp.test(url) || mp4RegExp.test(url);
}

let currentVideoIndex = 0;
let player;
let videoUrls;

function searchLSQVideo() {
  const word = document.getElementById('word').value;

  if (word.length === 0) {
      alert('Please enter a word')
  } else {
      const loaderElement = document.getElementById('loader');
      if (loaderElement) {
          loaderElement.style.display = 'block';
      }

      document.getElementById("video").style.backgroundColor = 'transparent';
      const wordsRef = firebase.firestore().collection('words').doc(word);
      wordsRef.get().then((doc) => {
          if (doc.exists) {
              const definition = doc.data().definition;
              const videos = doc.data().videos;

              videoUrls = videos;

              if (!videoUrls && definition) {
                  
                  performTranslations(definition);
              }

              else if (videoUrls.length > currentVideoIndex) {
                  loadVideo(videoUrls[currentVideoIndex]);
              } else {
                  alert('No videos available for this word.');
                  if (loaderElement) {
                      loaderElement.style.display = 'none';
                  }
              }
          } else {
              alert('Sorry, but there is no word in the dictionary.');
              if (loaderElement) {
                  loaderElement.style.display = 'none';
              }
          }
      }).catch((error) => {
          console.error('Error getting document:', error);
          if (loaderElement) {
              loaderElement.style.display = 'none';
          }
      });
  }
}
function performTranslations(phrase) {
    const words = phrase.split(' ');
    let index = 0;

    function loadNextVideo() {
        return new Promise((resolve, reject) => {
            if (index < words.length) {
                const word = words[index];
                const translationRef = firebase.firestore().collection('words').doc(word);

                translationRef.get().then((doc) => {
                    if (doc.exists) {
                        const videos = doc.data().translations;

                        if (videos && videos.length > 0) {
                            // Use loadVideo with the promise to wait for the "ended" event
                            loadVideo(videos[0]).then(() => {
                                index++;
                                resolve(); // Resolve the promise to move to the next iteration
                            });
                        } else {
                            console.log(`No videos available for the word: ${word}`);
                            index++;
                            resolve(); // Resolve the promise to move to the next iteration
                        }
                    } else {
                        console.log(`Word not found in the dictionary: ${word}`);
                        index++;
                        resolve(); // Resolve the promise to move to the next iteration
                    }
                }).catch((error) => {
                    console.error('Error getting document:', error);
                    index++;
                    resolve(); // Resolve the promise to move to the next iteration
                });
            } else {
                resolve(); // Resolve the promise when all words are processed
            }
        });
    }

    // Use async/await to handle the promise chain
    async function loadVideos() {
        while (index < words.length) {
            await loadNextVideo();
        }
    }

    loadVideos(); // Start loading videos
}



function loadVideo(videoUrl) {
    return new Promise((resolve) => {
        const loaderElement = document.getElementById('loader');
        if (loaderElement) {
            loaderElement.style.display = 'block';
        }

        if (isYouTubeVideo(videoUrl)) {
            videoUrls = youtube_parser(videoUrl);
            loadYouTubeVideo(videoUrls, resolve);
        } else {
            loadMP4Video(videoUrl, resolve);
        }
    });
}

function isYouTubeVideo(url) {
    return url.includes('youtube.com');
}

function loadYouTubeVideo(videoUrl, resolve) {
    if (!player) {
        player = new YT.Player('video', {
            height: '315',
            width: '560',
            videoId: videoUrl,
            events: {
                'onReady': function (event) {
                    onPlayerReady(event);
                    event.target.addEventListener('onStateChange', function (state) {
                        if (state.data === YT.PlayerState.ENDED) {
                            resolve(); // Resolve the promise when the video ends
                        }
                    });
                }
            }
        });
    } else {
        player.loadVideoById(videoUrl);
    }
}


function loadMP4Video(videoUrl, resolve) {
    const videoContainer = document.getElementById('video');

    if (videoContainer) {
        videoContainer.innerHTML = '';
        const videoElement = document.createElement('video');
        videoElement.id = 'video';
        videoElement.width = '560';
        videoElement.height = '315';
        const sourceElement = document.createElement('source');
        sourceElement.src = videoUrl;
        sourceElement.type = 'video/mp4';
        videoElement.appendChild(sourceElement);
        videoContainer.appendChild(videoElement);
        videoElement.play();
        videoElement.addEventListener('ended', function () {
            resolve(); // Resolve the promise when the video ends
        });

        if (!videoElement.controls) {
            videoElement.controls = true;
            videoElement.addEventListener('click', function () {
                if (videoElement.paused) {
                    videoElement.play();
                } else {
                    videoElement.pause();
                }
            });

            videoElement.addEventListener('dblclick', function () {
                if (videoElement.requestFullscreen) {
                    videoElement.requestFullscreen();
                } else if (videoElement.mozRequestFullScreen) {
                    videoElement.mozRequestFullScreen();
                } else if (videoElement.webkitRequestFullscreen) {
                    videoElement.webkitRequestFullscreen();
                } else if (videoElement.msRequestFullscreen) {
                    videoElement.msRequestFullscreen();
                }
            });

            videoElement.addEventListener('contextmenu', function (event) {
                event.preventDefault();
                const playbackRates = [0.5, 1, 1.5, 2];
                const currentSpeedIndex = playbackRates.indexOf(videoElement.playbackRate);
                const nextSpeedIndex = (currentSpeedIndex + 1) % playbackRates.length;
                videoElement.playbackRate = playbackRates[nextSpeedIndex];
            });
        }
    }
}



function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        currentVideoIndex = (currentVideoIndex + 1) % videoUrls.length;
        if (currentVideoIndex < videoUrls.length) {
            loadVideo(videoUrls[currentVideoIndex], () => {}); // Empty callback, as we're using promises now
        }
    }
}

function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : false;
}
    
     return(
        <div className="dictionnaire"> 
            <div className="centrepage">
        <div className="content">
            <h2>Dictionnaire</h2>
            <p>Expand and collapse sections for easy navigation.</p>
        </div>
    </div>
    
    <div className="collapsible">
        <button className="collapsible-btn">Definition
            <i className="fas fa-chevron-circle-down"></i>
        </button>
        
        <div className="collapsible-content">
        <form>
            <div className="input-section">
                <label className ="dicto-label" htmlFor="word">Le Mot:</label>
                <input type="text" id="word"/>
            </div>
            <div  className="video-section">
                <label  className ="dicto-label" htmlFor="lsq-video">Definition en LSQ:</label>
                <div id="video">
                    <div id="loader"></div>
                </div>
            </div>
        </form>
            <div className="button">
                <button type="submit" id="define-button" onClick={searchLSQVideo}>Définir</button>
            </div>
        </div>
    </div>

    <div className="collapsible">
        <button className="collapsible-btn">Ajouter un mot
            <i className="fas fa-chevron-circle-down"></i>
        </button>
        <div className="collapsible-content">
            <div className="input-section">
                <label className ="dicto-label" htmlFor="lsq-word">Le Mot:</label>
                <input type="text" id="lsq-word"/>
            </div>
            <div className="input-section">
                <label className ="dicto-label" htmlFor="definition">Definition:</label>
                <input type="text" id="definition"/>
            </div>
            <div className="input-section">
                <label className ="dicto-label" htmlFor="lsq-entry">Traduction en LSQ:</label>
                <input type="text" id="lsq-entry"/>
            </div>
            <div className="button">
                <button type="button" id="add-word-button">Ajouter</button>
            </div> 
        </div>
    </div>
    </div>




        
    )
     }
    