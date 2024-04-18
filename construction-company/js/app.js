$(document).ready(function() {
    $('.nav-menu').slicknav({
        prependTo: '.mobile-menu',
        label: '',
       allowParentLinks: true,
  
      });
});

$('#team').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('#news').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#partners').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        800:{
            items:4
        },
        1000:{
            items:5
        }
    }
})

const searchIcon = document.getElementById('search-btn');
const searchBar = document.getElementById('search-bar')

let isSearchBarVisible = false;

searchIcon.addEventListener('click', function() {
  if (isSearchBarVisible) {
    searchBar.style.display = 'none';
    isSearchBarVisible = false;
  } else {
    searchBar.style.display = 'block';
    isSearchBarVisible = true;
  }
});

document.addEventListener('click', function(event) {
  if (
    event.target !== searchIcon &&
    event.target !== searchBar &&
    isSearchBarVisible
  ) {
    searchBar.style.display = 'none';
    isSearchBarVisible = false;
  }
});