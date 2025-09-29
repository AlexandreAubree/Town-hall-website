import Header from '../components/Header';
import Footer from '../components/Footer';
import VillageCard from '../components/VillageCard';

export default function Home() {
  return (
    <>
      <Header />
     <main className="main-page">
       <h2>Bienvenue dans la communauté de communes Terroir de Caux</h2>
       <p>Choisissez une commune ou explorez les services proposés.</p>

      <div className="grid">
        <VillageCard name="Auzouville-sur-Sâane" image="/auzouville_sur_saane.jpg" href="/mairies/auzouville-sur-saane" />
        <VillageCard name="Lestanville" image="/lestanville.jpg" href="/mairies/lestanville" />
        <VillageCard name="Royville" image="/royville.jpeg" href="/mairies/royville" />
        <VillageCard name="Saint-Pierre-Bénouville" image="/st_pierre_benouville.jpg" href="/mairies/saint-pierre-benouville" />
        <VillageCard name="Saint-Ouen-le-Mauger" image="/saint_ouen_le_mauger.jpg" href="/mairies/saint-ouen-le-mauger" />
      </div>
<h2>À propos</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat blanditiis impedit quibusdam temporibus accusantium corrupti 
        rerum delectus ipsam. Ullam cupiditate recusandae impedit ipsam, voluptate sequi perspiciatis commodi vero aperiam necessitatibus
         reprehenderit saepe eius architecto fugit facere. Animi a ratione eius cumque est eum illum, culpa molestias incidunt aliquam</p>
          <p>tempore debitis facere inventore qui cum dolorem pariatur dolor ipsum illo assumenda modi repellat minus! Fuga quisquam tempore
           iusto nemo quo fugiat tenetur eligendi ea ipsum, provident vero accusantium voluptatum beatae! Molestiae unde fugiat maiores
            deserunt qui fuga vitae molestias eaque magni! Impedit recusandae itaque quae voluptatibus unde odit distinctio, deserunt
             iure a at libero commodi, eum dicta suscipit fugit magni possimus dolore vitae ducimus! Voluptate unde, ut id debitis 
             exercitationem cumque quod enim veniam iste provident iusto deserunt perspiciatis vel quis deleniti ad excepturi laborum</p>
     </main>

      <Footer />
    </>
  );
}
