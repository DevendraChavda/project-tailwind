
        //blog pages
        btn1 = document.getElementById("btn1");
        btn2 = document.getElementById("btn2");
        blog1 = document.getElementById("blog1");
        blog2 = document.getElementById("blog2");
        btn1.addEventListener('click',()=>{
          btn2.classList.remove('bg-[#ee4a03]');
          btn2.classList.add('bg-gray-600');

          btn1.classList.remove('bg-gray-600');
          btn1.classList.add('bg-[#ee4a03]');

          blog1.classList.remove('hidden');
          blog1.classList.add('grid');

          blog2.classList.remove('grid');
          blog2.classList.add('hidden');
        });

        btn2.addEventListener('click',()=>{
          btn1.classList.remove('bg-[#ee4a03]');
          btn1.classList.add('bg-gray-600');

          btn2.classList.remove('bg-gray-600');
          btn2.classList.add('bg-[#ee4a03]');

          blog2.classList.remove('hidden');
          blog2.classList.add('grid');

          blog1.classList.remove('grid');
          blog1.classList.add('hidden');
        });

      //blog Categories

      var Categories = document.getElementsByClassName('elem');

      for(var i=0; i<Categories.length; i++){
        Categories[i].addEventListener('click',function(event){
          event.preventDefault();
        var targetCategoryId = this.getAttribute('href');
        var targetCategory = document.getElementById(targetCategoryId);
        console.log(targetCategoryId);

        var contantCategory = document.getElementsByClassName('categ');
        console.log(contantCategory);

        for(var j=0; j<contantCategory.length; j++){
          if(contantCategory[j].classList.contains('grid')){
            contantCategory[j].classList.remove("grid");
            contantCategory[j].classList.add("hidden");
          }
        }

        targetCategory.classList.remove('hidden');
        targetCategory.classList.add('grid');

        });
      }

      function articlePage() {
        window.location.href = "/article-page.html";
      }