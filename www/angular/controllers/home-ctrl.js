/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

ctrls.controller('homeCtrl', function($scope, $http, $timeout, $ionicLoading, $ionicTabsDelegate) {
    $scope.items = [
        {title: 'laughing gas', icon: 'ion-ios-videocam', isCompleted: true},
        {title: 'spring tutorial', icon: 'ion-ios-videocam', isCompleted: false},
        {title: 'container JPA', icon: 'ion-ios-videocam', isCompleted: true}
    ];

    $scope.loadVideos = function() {
        $scope.loadingVideos = true;
        $ionicLoading.show({template: 'Loading...'});
//        $timeout(function() {
        $http.get('http://54.186.163.242:8080/laf-1.0/web/lafresource/lafVideos').success(function(r) {
            $ionicLoading.hide();
            $scope.videos = r.items;
        });

//        }, 1000);
    };

    $scope.loadVideos();
    $scope.videoUrl = 'http://www.youtube.com/embed/';

    $scope.playVideo = function(vid) {
        $ionicTabsDelegate.select(1);
        $scope.videoUrl = 'http://www.youtube.com/embed/' + vid;
    };
});


var resp = {
    "kind": "youtube#searchListResponse",
    "etag": "\"9Y5jTkxN1JET3y-M4wKMA5aK7Mk/_IbNobflwKDgDFLNi9vd9eZLOHE\"",
    "nextPageToken": "CAUQAA",
    "pageInfo": {
        "totalResults": 3723,
        "resultsPerPage": 5
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "etag": "\"9Y5jTkxN1JET3y-M4wKMA5aK7Mk/0w4oW_-QGDZSgR_hkBU_Sq_KmKw\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "Ay4GggfZ2CY"
            },
            "snippet": {
                "publishedAt": "2015-02-21T02:47:10.000Z",
                "channelId": "UC_x5XG1OV2P6uZZ5FSM9Ttw",
                "title": "Google Root Access: 3 ways to get developers to buy into your platform, with startup Magnet",
                "description": "Developers hate marketing. So how do you market to them? You don't, says Pascal Jaillon, and provides three ways to reach them and build a better product in ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Ay4GggfZ2CY/default.jpg"
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Ay4GggfZ2CY/mqdefault.jpg"
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Ay4GggfZ2CY/hqdefault.jpg"
                    }
                },
                "channelTitle": "GoogleDevelopers",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"9Y5jTkxN1JET3y-M4wKMA5aK7Mk/L8bpY3_ll7YWnYxJugYa3n_qL20\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "SRo9RcE65lo"
            },
            "snippet": {
                "publishedAt": "2015-02-14T00:44:03.000Z",
                "channelId": "UC_x5XG1OV2P6uZZ5FSM9Ttw",
                "title": "Google Developers Channel Trailer",
                "description": "The Google Developers YouTube channel provides developers with the latest news and best practices for designing, developing and distributing your web and ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/SRo9RcE65lo/default.jpg"
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/SRo9RcE65lo/mqdefault.jpg"
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/SRo9RcE65lo/hqdefault.jpg"
                    }
                },
                "channelTitle": "GoogleDevelopers",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"9Y5jTkxN1JET3y-M4wKMA5aK7Mk/HyvvsfFWoimNWdLo-K5H89kLC7g\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "1s_LoWy2dBU"
            },
            "snippet": {
                "publishedAt": "2015-02-12T22:53:56.000Z",
                "channelId": "UC_x5XG1OV2P6uZZ5FSM9Ttw",
                "title": "How I: Validated my idea in 2 days (with no code)",
                "description": "Want to save thousands of lines of code? First, identify the fundamental value proposition. Then, hit the pub. Learn how voXup's +PeterLewis tapped into the ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/1s_LoWy2dBU/default.jpg"
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/1s_LoWy2dBU/mqdefault.jpg"
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/1s_LoWy2dBU/hqdefault.jpg"
                    }
                },
                "channelTitle": "GoogleDevelopers",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"9Y5jTkxN1JET3y-M4wKMA5aK7Mk/AXLG1u7XFPEH5X4nXgDvl-bpf8k\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "Psp7YivWL90"
            },
            "snippet": {
                "publishedAt": "2015-02-12T17:35:51.000Z",
                "channelId": "UC_x5XG1OV2P6uZZ5FSM9Ttw",
                "title": "GDELT & BigQuery: Understand the world",
                "description": "The GDELT project aims to collect every relevant event in human society, and make it analyzable by anyone interested in learning from it. Hosted on Google Bi...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Psp7YivWL90/default.jpg"
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Psp7YivWL90/mqdefault.jpg"
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Psp7YivWL90/hqdefault.jpg"
                    }
                },
                "channelTitle": "GoogleDevelopers",
                "liveBroadcastContent": "none"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "\"9Y5jTkxN1JET3y-M4wKMA5aK7Mk/JtTec1VRLx3DQJnQlHPvOl-YOIk\"",
            "id": {
                "kind": "youtube#video",
                "videoId": "eJqbcKVUe2g"
            },
            "snippet": {
                "publishedAt": "2015-02-10T23:35:05.000Z",
                "channelId": "UC_x5XG1OV2P6uZZ5FSM9Ttw",
                "title": "Google @ GDC 2015",
                "description": "Get a sneak peek at what Google has in store for you at the Game Developers Conference this year!",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/eJqbcKVUe2g/default.jpg"
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/eJqbcKVUe2g/mqdefault.jpg"
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/eJqbcKVUe2g/hqdefault.jpg"
                    }
                },
                "channelTitle": "GoogleDevelopers",
                "liveBroadcastContent": "none"
            }
        }
    ]
};