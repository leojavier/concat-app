@ECHO OFF
//CSS Files
cd src
mkdir css
copy "C:\projects\Web.TonyRobbins\Web.TonyRobbins\Web.TonyRobbins\Content\styles\icons\*.css" "C:\Users\leo-javier\Desktop\concat-app\src\css\*.css"
copy "C:\projects\Web.TonyRobbins\Web.TonyRobbins\Web.TonyRobbins\Content\*.css" "C:\Users\leo-javier\Desktop\concat-app\src\css\*.css"
@ECHO OFF
//JS Files [VENDORS]
mkdir js
copy "C:\projects\Web.TonyRobbins\Web.TonyRobbins\Web.TonyRobbins\Scripts\jquery-1.8.2.js" "C:\Users\leo-javier\Desktop\concat-app\src\js\*.js"
copy "C:\projects\Web.TonyRobbins\Web.TonyRobbins\Web.TonyRobbins\Scripts\vendors\countdown\dest\jquery.countdown.js" "C:\Users\leo-javier\Desktop\concat-app\src\js\*.js"
copy "C:\projects\Web.TonyRobbins\Web.TonyRobbins\Web.TonyRobbins\Scripts\vendors\responsive-tables\responsive-tables.js" "C:\Users\leo-javier\Desktop\concat-app\src\js\*.js"
copy "C:\projects\Web.TonyRobbins\Web.TonyRobbins\Web.TonyRobbins\Scripts\vendors\bootstrap\dist\js\bootstrap.min.js" "C:\Users\leo-javier\Desktop\concat-app\src\js\*.js"
copy "C:\projects\Web.TonyRobbins\Web.TonyRobbins\Web.TonyRobbins\Scripts\vendors\owlcarousel\owl-carousel\owl.carousel.js" "C:\Users\leo-javier\Desktop\concat-app\src\js\*.js"
copy "C:\projects\Web.TonyRobbins\Web.TonyRobbins\Web.TonyRobbins\Scripts\vendors\chosen_v1.1.0\chosen.jquery.js" "C:\Users\leo-javier\Desktop\concat-app\src\js\*.js"
copy "C:\projects\Web.TonyRobbins\Web.TonyRobbins\Web.TonyRobbins\Scripts\vendors\chartjs\Chart.js" "C:\Users\leo-javier\Desktop\concat-app\src\js\*.js"
copy "C:\projects\Web.TonyRobbins\Web.TonyRobbins\Web.TonyRobbins\Scripts\vendors\videojs\dist\video-js\video.js" "C:\Users\leo-javier\Desktop\concat-app\src\js\*.js"
copy "C:\projects\Web.TonyRobbins\Web.TonyRobbins\Web.TonyRobbins\Scripts\vendors\nouislider\distribute\jquery.nouislider.all.js" "C:\Users\leo-javier\Desktop\concat-app\src\js\*.js"

//JS Files [DEPENDENCIES]
copy "C:\projects\Web.TonyRobbins\Web.TonyRobbins\Web.TonyRobbins\Scripts\app.js" "C:\Users\leo-javier\Desktop\concat-app\src\js\*.js"
copy "C:\projects\Web.TonyRobbins\Web.TonyRobbins\Web.TonyRobbins\Scripts\carousels.js" "C:\Users\leo-javier\Desktop\concat-app\src\js\*.js"
copy "C:\projects\Web.TonyRobbins\Web.TonyRobbins\Web.TonyRobbins\Scripts\charts.js" "C:\Users\leo-javier\Desktop\concat-app\src\js\*.js"
copy "C:\projects\Web.TonyRobbins\Web.TonyRobbins\Web.TonyRobbins\Scripts\utilities.js" "C:\Users\leo-javier\Desktop\concat-app\src\js\*.js"
copy "C:\projects\Web.TonyRobbins\Web.TonyRobbins\Web.TonyRobbins\Scripts\styleguide.js" "C:\Users\leo-javier\Desktop\concat-app\src\js\*.js"
copy "C:\projects\Web.TonyRobbins\Web.TonyRobbins\Web.TonyRobbins\Scripts\checkout.js" "C:\Users\leo-javier\Desktop\concat-app\src\js\*.js"
copy "C:\projects\Web.TonyRobbins\Web.TonyRobbins\Web.TonyRobbins\Scripts\identity-test.js" "C:\Users\leo-javier\Desktop\concat-app\src\js\*.js"
copy "C:\projects\Web.TonyRobbins\Web.TonyRobbins\Web.TonyRobbins\Scripts\members-portal.js" "C:\Users\leo-javier\Desktop\concat-app\src\js\*.js"
copy "C:\projects\Web.TonyRobbins\Web.TonyRobbins\Web.TonyRobbins\Scripts\dataValidator.js" "C:\Users\leo-javier\Desktop\concat-app\src\js\*.js"
copy "C:\projects\Web.TonyRobbins\Web.TonyRobbins\Web.TonyRobbins\Scripts\modernizr.js" "C:\Users\leo-javier\Desktop\concat-app\src\js\*.js"
copy "C:\projects\Web.TonyRobbins\Web.TonyRobbins\Web.TonyRobbins\Scripts\login.js" "C:\Users\leo-javier\Desktop\concat-app\src\js\*.js"
ECHO - JAVASCRIPT FILES UPDATED...
cd..