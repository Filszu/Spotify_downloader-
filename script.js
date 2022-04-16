const buttonTransform = KUTE.fromTo(
    '#btnStyle1', {
        path: '#btnStyle1'
    }, {
        path: '#btnStyle2'
    }, {
        repeat: 0,
        duration: 1500,
        // yoyo: true
    }

)


const downBTN = document.querySelector(".download_btn")
downBTN.addEventListener('click', function(){
    buttonTransform.start()
});


const blob = KUTE.fromTo(
    '#blob1',
        {path: '#blob1'},
        {path: '#blob2'},
        {repeat: 999, duration: 3000, yoyo: true}
    
)

blob.start()