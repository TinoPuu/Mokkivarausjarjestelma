import React, { useState, useEffect } from 'react';
import '../tyylit/tiedot.css';

function Tietoameista() {
    
    
    useEffect(() => {
        
    }, [])
    
    return(
        <section>
           <div>
               <h1>Tietoa meistä</h1>
               <div className="yleista">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur ultrices felis ac laoreet venenatis. 
                    Nam nibh enim, volutpat ut ante ac, condimentum sodales lacus. 
                    Nam imperdiet ex a mauris gravida consequat ut non nulla.
                     Donec odio odio, fermentum sit amet dignissim vitae, aliquet non ligula. 
                     Sed sed malesuada nibh. Donec eget vehicula neque. Nunc gravida tortor eget 
                     ultrices ultrices.
                     Aenean eu velit ac risus elementum tincidunt. 
                     Sed mauris quam, porttitor sed porttitor vulputate, 
                     dignissim sed sapien. Proin finibus efficitur purus, 
                     placerat auctor lectus laoreet vel. 
                     Sed at nisl vel dolor tempus varius vitae vel mauris. 
                     Aenean nec lacus at erat rutrum sodales. 
                     Proin congue nisl eu lacus gravida mattis. 
                     Donec ultrices enim non vehicula ornare. 
                     Curabitur elementum mollis velit, et tempus ante varius vel. 
                     Nullam maximus dolor nec tempus finibus. 
                     Proin imperdiet auctor nibh vel tincidunt. 
                     Curabitur eros ipsum, elementum eget dui vitae, 
                     gravida pellentesque lorem. 
                     Vestibulum sodales maximus facilisis. 
                     Sed rhoncus cursus dui sed efficitur.
                     Sed quis massa laoreet, rutrum lorem nec, vehicula velit. 
                     Praesent quis fermentum turpis. 
                     In nisl est, malesuada vitae odio nec, 
                     efficitur imperdiet tortor. 
                     Phasellus orci purus, molestie ut ligula et, sagittis posuere enim. 
                     Donec ac eros leo. Sed nec lectus odio. Nullam convallis,
                      libero in tincidunt vulputate, nulla dolor accumsan mauris, 
                      at ultrices velit elit a orci. 
                      Curabitur vel nunc sodales risus vulputate feugiat. 
                      Nullam laoreet vitae nulla vel placerat. Nulla commodo 
                      leo non quam vehicula malesuada sit amet eget nunc. Praesent 
                      commodo turpis turpis, eget venenatis sapien varius vel. Donec quis
                       nulla purus. Nam enim nisl, tempus at tempus vel, lobortis quis dui. 
                       Ut in justo ullamcorper, scelerisque arcu sit amet, mollis lorem.</p>
               </div>
               <div classname="yhteystiedot">
                <h6>Osoite: Testitie123</h6>
                <h6>Puhelinnumero: 0501231323</h6>
                <h6>Sähköposti: testi@gmail.com </h6>
                <h6>Omistajat: Matti Meikäläinen ja Tiina Tietäväinen</h6>
                <h6>Y-tunnus: 1234566</h6>
               </div>
           </div>
        </section>
    )
  }
  export default Tietoameista;