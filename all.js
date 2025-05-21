

if(document.body.id == 'index') {


    const hover = document.querySelector('.hover_opacity');

    hover.addEventListener('mouseover', function() {
        const aChild = this.querySelector('.a');
        const bChild = this.querySelector('.b');
        if(aChild && bChild) {
            aChild.style.opacity = '0';
            bChild.style.opacity = '1';
        }
    });
    
    hover.addEventListener('mouseout', function() {
        const aChild = this.querySelector('.a');
        const bChild = this.querySelector('.b');
        if(aChild && bChild) {
            bChild.style.opacity = '0';
            aChild.style.opacity = '1';
        }
    });


} else {


    const hoverElements = document.querySelectorAll(".hover");

    hoverElements.forEach(function (element) {
        element.addEventListener("mouseover", function () {
            const aChild = this.querySelector(".a");
            const bChild = this.querySelector(".b");
            
            if (aChild && bChild) {
                aChild.style.display = "none";
                bChild.style.display = "inline-block";
            }
        });
        element.addEventListener("mouseout", function () {
            const aChild = this.querySelector(".a");
            const bChild = this.querySelector(".b");
            
            if (aChild && bChild) {
                bChild.style.display = "none";
                aChild.style.display = "inline-block";
            }
        });
    });


}