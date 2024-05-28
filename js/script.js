const { createApp } = Vue

createApp({
    data() {
    return {
        message: 'My first VUE project!',
        imageURL: 'https://upload.wikimedia.org/wikipedia/en/6/63/Tool_-_Lateralus.jpg'
        }
    },
    methods: {
        albumCoverRound: function(albumCover){
            
        }
    }
}).mount('#app')