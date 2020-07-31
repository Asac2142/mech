// mech parts
const head     = document.getElementById('head-container');
const rightArm = document.getElementById('arm-1-container'); 
const leftArm  = document.getElementById('arm-2-container');
const emblem   = document.getElementById('emblem-container');
const rightLeg = document.getElementById('leg-1-container');
const leftLeg  = document.getElementById('leg-2-container');

const startButton = document.querySelector('.start-button');
const backdrop = document.querySelector('.backdrop');
const buildAssembled = {};

// giving mech parts the draggable behaviour
const draggableHead     = new PlainDraggable(head);
const draggableRightArm = new PlainDraggable(rightArm);
const draggableLeftArm  = new PlainDraggable(leftArm);
const draggableEmblem   = new PlainDraggable(emblem);
const draggableRightLeg = new PlainDraggable(rightLeg);
const draggableLeftLeg  = new PlainDraggable(leftLeg);

// giving the snap option to each part
draggableHead.snap      = {x: 530, y: 131};
draggableRightArm.snap  = {x: 341, y: 205};
draggableLeftArm.snap   = {x: 674, y: 214};
draggableEmblem.snap    = {x: 510, y: 129};
draggableLeftLeg.snap   = {x: 594, y: 469};
draggableRightLeg.snap  = {x: 429, y: 470};

const closeWelcomeModal = () => {    
    const modal = document.querySelector('.modal-welcome');

    backdrop.className = 'close';
    modal.className = 'close';
};

const openEndingModal = () => {
    const endingModal = document.querySelector('.modal-end');
    endingModal.style.display = 'block';
    backdrop.className = 'backdrop';
};

const verifyMechConstruction = () => {
    if (buildAssembled.head && buildAssembled.rArm && buildAssembled.lArm && 
        buildAssembled.emblem && buildAssembled.rLeg && buildAssembled.lLeg) {                        
            openEndingModal();
        }
};

const displayCompanyLogo = () => {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.outro').style.visibility = 'visible';
};

startButton.addEventListener('click', closeWelcomeModal);

draggableHead.onDragEnd = (coordinate) => {
    if (coordinate.left === 530 && coordinate.top === 131) {
        buildAssembled.head = true;
    }
    verifyMechConstruction();
};

draggableRightArm.onDragEnd = (coordinate) => {
    if (coordinate.left === 341 && coordinate.top === 205) {
        buildAssembled.rArm = true;
    }
    verifyMechConstruction();
};

draggableLeftArm.onDragEnd = (coordinate) => {
    if (coordinate.left === 674 && coordinate.top === 214) {
        buildAssembled.lArm = true;
    }
    verifyMechConstruction();
};

draggableEmblem.onDragEnd = (coordinate) => {
    if (coordinate.left === 510 && coordinate.top === 129) {
        buildAssembled.emblem = true;
    }
    verifyMechConstruction();
};

draggableRightLeg.onDragEnd = (coordinate) => {
    if (coordinate.left === 429 && coordinate.top === 470) {
        buildAssembled.rLeg = true;
    }
    verifyMechConstruction();
};

draggableLeftLeg.onDragEnd = (coordinate) => {
    if (coordinate.left === 594 && coordinate.top === 469) {
        buildAssembled.lLeg = true;
    }
    verifyMechConstruction();
};
