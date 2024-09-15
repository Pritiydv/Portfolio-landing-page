// You can add interactivity like form validation, smooth scrolling, etc.
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Message Sent!');
});

 $(document).ready(function(){

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})

});