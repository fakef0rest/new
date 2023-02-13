const truckLabel = document.getElementById('truck-label'),
      carLabel = document.getElementById('car-label'),
      truckPackages = document.querySelectorAll('.truck-package'),
      carPackages = document.querySelectorAll('.car-package');

truckLabel.onclick = function() {
    // carPackages.classList.remove('.block-active')
    carPackages.forEach(package => {
        if (package.classList.contains('block-active')) {
            package.classList.remove('block-active')
        }
    })
    truckPackages.forEach(package => {
        if (!package.classList.contains('block-active')) {
            package.classList.add('block-active')
        }
    })
}
carLabel.onclick = function() {
    carPackages.forEach(package => {
        if (!package.classList.contains('block-active')) {
            package.classList.add('block-active')
        }
    })
    truckPackages.forEach(package => {
        if (package.classList.contains('block-active')) {
            package.classList.remove('block-active')
        }
    })
}

const modalActivators = document.querySelectorAll('.modal-activator'),
      expressActivator = document.getElementById('express'),
      executiveActivator = document.getElementById('executive'),
      modalBlock = document.querySelector('.modal-block'),
      body = document.querySelector('body'),
      modalBlockButton = document.getElementById('modal-block');


modalActivators.forEach((item) => {
    item.onclick = function() {
        modalBlock.classList.add('modal-active');
        body.classList.add('body-background');
        console.log(item.id)
        document.addEventListener('keydown', (e) => {
            if (e.key == 'Escape') {
                modalBlock.classList.remove('modal-active');
                body.classList.remove('body-background');
            }
        });
        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('body-background')) {
                modalBlock.classList.remove('modal-active');
                body.classList.remove('body-background');
            }
            if (event.target.classList.contains('modal-close-button')) {
                modalBlock.classList.remove('modal-active');
                body.classList.remove('body-background');
            } 
            if (event.target.classList.contains('modal-send-button')) {
                modalBlock.classList.remove('modal-active');
                body.classList.remove('body-background');
            } 
        })
    }

})


const chooseBtn = document.querySelectorAll('.chooseBtn');


chooseBtn.forEach(item => {
    item.onclick = function() {
        chooseBtn.forEach(i => {
            item.classList.toggle('btnActive')
            if (item !== i && i.classList.contains('btnActive')) {
                i.classList.remove('btnActive')
            }
        })
    }
})
