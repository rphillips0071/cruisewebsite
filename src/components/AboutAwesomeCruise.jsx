import React from 'react';
import Carribean from '../assets/caribbean.jpg'
import Mediterranean from '../assets/mediterranean.jpg'
import SouthAmerica from '../assets/southAmerica.jpg'
import RelaxCruise from '../assets/relaxCruise.jpg'

function AboutAwesomeCruise() {
    return (
<>
    <div className="about-awesome-container">
      {/* The Awesome Difference Section */}
      <div className="awesome-difference-container">
        <div className="image-container">
        <img src={RelaxCruise} alt="" />
        </div>
        <div className="text-container">
          <h2>The Awesome Difference</h2>
          <div className="text-section">
            <h3>Feel Free</h3>
            <p>At Awesome Cruise Line, freedom is the cornerstone of our experience. We provide an escape from the everyday with award-winning entertainment, diverse dining, and a variety of activities — all without a schedule.</p>
          </div>
          <div className="text-section">
            <h3>More With Awesome at Sea</h3>
            <p>Maximize your cruise vacation with our 'Awesome at Sea' benefits. Enjoy a range of inclusive offers like unlimited dining options, exciting excursions, and complimentary WiFi, all designed to enhance your journey.</p>
          </div>
          <div className="text-section">
            <h3>Vacation Your Way</h3>
            <p>With Awesome Cruise Line, you're the architect of your vacation. Choose from an array of destinations around the world and enjoy top-tier entertainment, dining, and accommodation. Your dream voyage awaits.</p>
          </div>
        </div>
      </div>
      </div>
        <div className="about-awesome-container">
            <section className="about-introduction">
                <h2>Welcome Aboard Awesome Cruise Line</h2>
                <p>With a fleet of state-of-the-art ships and itineraries spanning the globe, Awesome Cruise Line offers an unparalleled cruise experience. Discover majestic scenery, fine dining, thrilling entertainment, and serene relaxation aboard each of our unique voyages.</p>
            </section>

            <section className="featured-destinations">
                <h3>Featured Destinations</h3>
                <div className="destinations-grid">
                    <article className="destination">
                        <img src={Carribean} alt="Caribbean" />
                        <h4>Caribbean Dreams</h4>
                        <p>Set sail to the jewel-toned waters of the Caribbean with Awesome Cruise Line, where luxury meets tropical paradise. Each voyage is an immersion into a world of relaxation, adventure, and unmatched beauty. As our ship anchors by the powdery shores, you'll be welcomed by a symphony of waves and the gentle rustle of palm leaves. Spend your days exploring hidden coves, snorkeling among vibrant coral reefs, and lounging on sun-drenched decks. As the sun sets, enjoy a cocktail on the balcony of your suite, overlooking islands twinkling in the distance. Onshore, the rhythm of the Caribbean life will captivate you—dance to the beats of calypso music, sample rich flavors in local markets, and make memories in every port. From the Bahamas to Barbados, our Caribbean Dreams cruise offers an escape to the kind of blue skies and clear waters that postcards can only aspire to capture.</p>
                    </article>
                    <article className="destination">
                        <img src={Mediterranean} alt="Caribbean" />


                        <h4>Mediterranean Marvels</h4>
                        <p>Embark on a voyage through time and taste with the Mediterranean Marvels cruise offered by Awesome Cruise Line. Our carefully curated itineraries bring you to the cradle of civilization. Walk the cobblestone streets that great philosophers once roamed, gaze upon ancient wonders, and bask in the Mediterranean sun that has shone on empires come and gone. Each port is a gateway to new experiences: savor authentic Neapolitan pizza, marvel at the Renaissance art in Florence, and witness the sunset over Santorini's caldera. Beyond the historic allure, you'll indulge in the modern luxuries onboard. Exceptional service, exquisite dining, and a wealth of activities await you. From the scent of lemon groves to the taste of fresh olives and wine, the Mediterranean Marvels cruise is a feast for the senses.
                        </p>
                    </article>
                    <article className="destination">
                        <img src={SouthAmerica} alt="Caribbean" />


                        <h4>South American Sojourn</h4>
                        <p>Discover the spirit and splendor of South America on an unforgettable journey with Awesome Cruise Line. From the moment you step aboard, you'll be transported into a world where adventure beckons at every turn. Our South American Sojourn takes you along the majestic coastline, where each destination is a vivid tapestry of culture, color, and natural wonder. Trek through rainforests teeming with exotic wildlife, ascend the mysterious Andean peaks, and let the rhythms of samba and tango dictate the pace of your evenings. The vibrant cities of Rio de Janeiro and Buenos Aires offer a glimpse into the continent's pulsating heart, while the serene beauty of Patagonia's glacial fields will leave you breathless. Dive into the rich heritage of ancient civilizations as you uncover the secrets of Machu Picchu and the Inca Empire. With Awesome Cruise Line, South America is not just a place to visit but an epic story to be a part of.</p>
                    </article>
                </div>
            </section>
        </div>
        </>
    );
}

export default AboutAwesomeCruise;
