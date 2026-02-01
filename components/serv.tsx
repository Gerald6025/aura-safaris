import React from 'react';
import { Camera, Map, Waves, Users, Car, Heart, CheckCircle } from 'lucide-react';

const AuraSafarisPage = () => {
  const services = [
    {
      title: "Victoria Falls Tours",
      desc: "Guided tours of the falls, sunset cruises, helicopter flights, and scenic excursions.",
      icon: <Waves className="w-6 h-6" />
    },
    {
      title: "Wildlife Safaris",
      desc: "Game drives and walking safaris in Zambezi, Hwange, Chobe, and Mana Pools.",
      icon: <Camera className="w-6 h-6" />
    },
    {
      title: "Adventure Activities",
      desc: "White-water rafting, bungee jumping, zip-lining, and gorge swings.",
      icon: <Map className="w-6 h-6" />
    },
    {
      title: "Cultural & Historical Tours",
      desc: "Authentic village visits, traditional dance shows, and heritage explorations.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Transfers & Cross-Border",
      desc: "Safe and efficient airport, intercity, and regional transfers.",
      icon: <Car className="w-6 h-6" />
    },
    {
      title: "Luxury & Honeymoon",
      desc: "Private safaris, romantic getaways, and premium lodge stays.",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  const activities = [
    "Game Drive", "Boat Cruise", "Zipline", "Chobe Day Trip", 
    "Flying Fox", "Hwange Game Drive", "Bungee Jumping", "Bird Watching", 
    "Elephant Ride", "White-Water Rafting", "Quad Biking", "Boma Dinner", 
    "Fishing Trip", "Night Drive & Bush Dinner"
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">


      {/* Services Grid */}
      <section className="py-20 px-40  mx-auto">

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <div className="text-[#C68642] mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Activities Section */}
      <section className="bg-[#1A2416] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Victoria Falls Activities</h2>
              <p className="text-stone-400 mb-8 text-lg">
                We offer a variety of exciting and affordable activities for all adventure levels and interests. Book your next thrill with us today.
              </p>
              <button className="bg-[#C68642] hover:bg-[#a36d35] text-white px-8 py-4 rounded-full font-bold transition-colors">
                Book Your Adventure
              </button>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors">
                  <CheckCircle className="text-[#C68642] w-5 h-5 flex-shrink-0" />
                  <span className="text-stone-200">{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default AuraSafarisPage;