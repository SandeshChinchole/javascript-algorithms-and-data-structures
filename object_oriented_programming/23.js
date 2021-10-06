// Use a Mixin to Add Common Behavior Between Unrelated Objects

let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};


let glideMixin = function(obj){
    obj.glide = function(){
        return "gliding";
    }
}

glideMixin(bird);
glideMixin(boat);

bird.glide();
boat.glide();