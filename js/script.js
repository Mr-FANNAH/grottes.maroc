<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grottes du Maroc</title>
    <link rel="stylesheet" href="css/stylesheet.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>


    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
    integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
    crossorigin=""/>

</head>

<body>
    <header>
        <a href="" class="logo">Maroc<style>
                @import url('https://fonts.googleapis.com/css2?family=Mr+Dafoe&display=swap');
            </style></a>
        <i class="fa-solid fa-bars" id="menu-icon"></i>
        <nav class="navbar">
            <a href="#Accueil" style="--iv:1;" class="active">Accueil</a>
            <a href="#Grottes" style="--iv:2;">Grottes</a>
            <a href="#information" style="--iv:4;">Informations</a>
            <a href="#contact" style="--iv:5;">Contact</a>
        </nav>
    </header>
    <main>
        <section class="Accueil" id="Accueil">
            <div class="Accueil-content">
                <h1>Plate-forme Web pour</h1>
                <h3><span class="multiple-text"></span></h3>
                <p>La plate-forme Web pour la gestion des grottes au Maroc est un outil numérique conçu pour la
                    préservation et la promotion du patrimoine naturel souterrain marocain. Elle centralise les données
                    sur les grottes, incluant leur localisation, géologie, biodiversité, ainsi que les aspects
                    historiques et culturels. Cette plate-forme propose des fonctionnalités interactives pour les
                    scientifiques, spéléologues et touristes, comme des cartes, des bases de données, des galeries
                    photos, et des outils de collaboration. Elle sert aussi de portail éducatif pour sensibiliser à la
                    conservation des grottes et intègre des modules de gestion pour le suivi et la conservation des
                    sites, soutenant ainsi la recherche scientifique et le tourisme durable.</p>
            </div>
            <div class="Accueil-img">
                <img src="images/mdm.png" alt="">
            </div>
        </section>
        






        <section class="Grottes" id="Grottes">
            <div id='mapid'></div>
            <script src='./main.js'></script>
            <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
    integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
    crossorigin=""></script>
        </section>




        <section class="information" id="information">
            <h2 class="heading">Grottes <span>Maroc</span></h2>

            <div class="information-container">
                <div class="information-box">
                    <img src="slider/image/friouato.png" alt="">
                    <div class="information-layer">
                        <h4>Grotte Friouato</h4>
                        <p>Situé à environ 20 kilomètres de la ville de Taza
                        </p>
                        <a href="slider/grottes.html"
                            target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>

                <div class="information-box">
                    <img src="slider/image/timdouine.jpg" alt="">
                    <div class="information-layer">
                        <h4>Grotte de Win-Timdouine</h4>
                        <p>Situé à plus de 60 km d’Agadir, et à 1.400 m d’altitude, la grotte de Win-Timdouine est une œuvre de la nature où l’action de l’eau a dissous les roches pour creuser 18 km de galeries. </p>
                        <a href="slider/grottes.html"
                            target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>

                <div class="information-box">
                    <img src="icons/photography.jpeg" alt="">
                    <div class="information-layer">
                        <h4>Grotte Chaara et randonnée au Parc Tazekka</h4>
                        <p>La grotte Chaara est une rivière souterraine de plus de 7,5Km, située dans le parc national de tazekka à l’extrême nord du moyen atlas
                        </p>
                        <a href="slider/grottes.html"
                            target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>

                <div class="information-box">
                    <img src="icons/flipkart.jpeg" alt="">
                    <div class="information-layer">
                        <h4>Grottes d'Hercule</h4>
                        <p>A 14 km à l'ouest de Tanger, se trouvent les Grottes d'Hercule. Étonnant et magnifique, ce site archéologique est surtout rempli de mystère.
                        </p>
                        <a href="slider/grottes.html"
                            target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>

                <div class="information-box">
                    <img src="icons/vision_pro.jpeg" alt="">
                    <div class="information-layer">
                        <h4>Grotte Des Pigeons</h4>
                        <p>La grotte des Pigeons, ou grotte de Taforalt ou Ifri n Tafoughalt , est un site préhistorique situé au Maroc
                        </p>
                        <a href="slider/grottes.html"
                            target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>

                <div class="information-box">
                    <img src="icons/blender.jpeg" alt="">
                    <div class="information-layer">
                        <h4>La Grotte du Chameau</h4>
                        <p>La grotte du Chameau, nommée ainsi à cause de la forme de la montagne au-dessus. Actuellement fermée faute d'exploitant touristique.
                        </p>
                        <a href="slider/grottes.html"
                            target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
        </section>
        <section class="contact" id="contact">
            <h2 class="heading">CONTACTEZ  <span>NOUS!</span></h2>

            <form action="#">
                <div class="input-box">
                    <input type="text" placeholder="Full Name">
                    <input type="email" placeholder="Email Address">
                </div>
                <div class="input-box">
                    <input type="number" placeholder="Mobile Number">
                    <input type="text" placeholder="Email Subject">
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                <input id="bttn" type="submit" value="Send Message" class="btn">
            </form>
        </section>
    </main>
    <footer>
        <div class="footer-text">
            <p>Copyright: GAGE:2022/2024 | Réalisé par: Boujamaa FANNAH, Amal Azour, Tarik Menzou | Encadré par: Pr_G.Zahour & Pr_S.MAIMOUNI</p>
        </div>
        <div class="footer-icontop">
            <a href="#Accueil">
                <i class="fa-solid fa-arrow-up"></i>
            </a>
        </div>
    </footer>
    <!-- scroll reveal -->
    <script src="https://unpkg.com/scrollreveal"></script>
    <!-- Custom javascript -->
    <script src="https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js"></script>
    <script src="js/script.js"></script>
</body>

</html>
