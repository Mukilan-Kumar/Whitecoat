'use client';

import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import Image from 'next/image';

export default function PartnersPage() {
  const partners = [
    { name: 'Adityaram Group', logo: 'adityaram_properties_private_limited.webp' },
    { name: 'Adroit Urban Developers', logo: 'adroit_urban_developers_private_limited.webp' },
    { name: 'Advaita Homes', logo: 'advaita_homes.webp' },
    { name: 'Agni Estates', logo: 'agni_estates_foundations_private_limited.webp' },
    { name: 'AKB Developers', logo: 'AKB_Developers___Promoters.webp' },
    { name: 'Akshaya', logo: 'akshaya_private_limited.webp' },
    { name: 'Alliance Infrastructure', logo: 'alliance_infrastructure_projects_private_limited.webp' },
    { name: 'Allied Investments', logo: 'allied_investments_housing_private_limited.webp' },
    { name: 'Amarprakash Developers', logo: 'amarprakash_developers_private_limited.webp' },
    { name: 'Ambattur Realty', logo: 'ambattur.webp' },
    { name: 'Anmol Shrusti', logo: 'anmol-shrusti.webp' },
    { name: 'Appaswamy Real Estates', logo: 'appaswamy_real_estates_limited.webp' },
    { name: 'AR Property Developers', logo: 'a_r_property_developers_pvt_ltd.webp' },
    { name: 'Arihant Foundations', logo: 'arihant_foundations_housing_limited.webp' },
    { name: 'Arun Excello', logo: 'arun_excello_constructions_llp-arun_excello_homes_private_limited.webp' },
    { name: 'Ashok Nandavanam', logo: 'ashok_nandavanam_properties_private_limited.webp' },
    { name: 'Asset Tree Homes', logo: 'assettrees.webp' },
    { name: 'ASV Constructions', logo: 'asv_constructions_private_limited.webp' },
    { name: 'Asvini Foundations', logo: 'asvini_foundations_private_limited.webp' },
    { name: 'Baashyaam Constructions', logo: 'baashyaam_constructions_private_limited.webp' },
    { name: 'BBCL Homes', logo: 'barath_building_construction_india_private_limited_bbcl.webp' },
    { name: 'Bhaggyam Constructions', logo: 'bhaggyam_constructions.webp' },
    { name: 'Bharanee Builders', logo: 'bharanee-builders.webp' },
    { name: 'Brigade Enterprises', logo: 'brigade_enterprises_limited.webp' },
    { name: 'BSCPL Infrastructure', logo: 'bscpl_infrastructure_limited.webp' },
    { name: 'Casagrand Builder', logo: 'casa_grande_private_limited.webp' },
    { name: 'Ceebros Property', logo: 'ceebros_property_development_private_limited.webp' },
    { name: 'CeeDeeYes Infrastructure', logo: 'ceedeeyes_infrastructure_development_private_limited.webp' },
    { name: 'Chaitanya Foundations', logo: 'chaitanya_builders___leasing_private_limited.webp' },
    { name: 'Creations', logo: 'creations.webp' },
    { name: 'Creations Promoters', logo: 'creations-promoters_developers.webp' },
    { name: 'Cybercity Builders', logo: 'cybercity.webp' },
    { name: 'DAC Promoters', logo: 'dac-2023.webp' },
    { name: 'DCC', logo: 'dcc_logo.webp' },
    { name: 'Deccan Estates', logo: 'deccan-estate.webp' },
    { name: 'Devinarayan Housing', logo: 'devinarayan_housing___property_developments_private_limited.webp' },
    { name: 'Divyasree Infrastructure', logo: 'divyasree_infrastructure_developers_private_limited.webp' },
    { name: 'DLF', logo: 'dlf.webp' },
    { name: 'Doshi Housing', logo: 'doshi_housing_private_limited.webp' },
    { name: 'DRA Projects', logo: 'dra_projects_private_limited.webp' },
    { name: 'Dugar Housing', logo: 'dugar_housing_limited.webp' },
    { name: 'EK Infra', logo: 'ek_infra.webp' },
    { name: 'Elite Homes', logo: 'elite_homes.webp' },
    { name: 'ETA Star Property', logo: 'eta_star_property_developers_limited.webp' },
    { name: 'Etica Developers', logo: 'etica_developers_private_limited.webp' },
    { name: 'Fairyland', logo: 'fairyland.webp' },
    { name: 'Featherlite Developers', logo: 'featherlite_developers.webp' },
    { name: 'Firm Foundations', logo: 'firm_foundations___housing_private_limited.webp' },
    { name: 'Fomra Housing', logo: 'fomra_housing___infrastructure_private_limited.webp' },
    { name: 'G Square Realtors', logo: 'g-square-group.webp' },
    { name: 'GP Homes', logo: 'g_p_homes_private_limited.webp' },
    { name: 'Ganga Foundations', logo: 'ganga_foundations_private_limited.webp' },
    { name: 'Gatala', logo: 'gatala.webp' },
    { name: 'Golden Homes', logo: 'golden_homes_private_limited.webp' },
    { name: 'Grand Magnum Housing', logo: 'grand_magnum_housing_pvt_ltd.webp' },
    { name: 'Green Valley Shelters', logo: 'green_valley_s_shelters_private_limited.webp' },
    { name: 'GTK Foundations', logo: 'LOGO_GTK.webp' },
    { name: 'Harini Builders', logo: 'harini-builders.webp' },
    { name: 'Harmony Residences', logo: 'harmony.webp' },
    { name: 'Horizon Developers', logo: 'horizon_developers.webp' },
    { name: 'India Builders', logo: 'india_builders_chennai_limited.webp' },
    { name: 'Indus Alliance', logo: 'indusalliance.webp' },
    { name: 'Indus Cityscapes', logo: 'indus_generating_values.webp' },
    { name: 'Intouch Construction', logo: 'intouch_construction ___infrastructure_private_limited.webp' },
    { name: 'Invicon', logo: 'invicon.webp' },
    { name: 'Isha Homes', logo: 'isha_homes_india_private_limited.webp' },
    { name: 'Iyra Constructions', logo: 'iyra.webp' },
    { name: 'Jain Housing', logo: 'jain_housing___constructions_limited.webp' },
    { name: 'Jamals', logo: 'jamals.webp' },
    { name: 'Jayaswathy', logo: 'jayaswathy.webp' },
    { name: 'JKB Housing', logo: 'jkb-housing.webp' },
    { name: 'Jones Foundations', logo: 'jones_foundations_private_limited.webp' },
    { name: 'KCEE Properties', logo: '2_KCEE_PROPERTIES_PVT_LTD_.webp' },
    { name: 'Kerry Estate', logo: 'kerry_estate.webp' },
    { name: 'KG Foundations', logo: 'kg_foundations_private_limited.webp' },
    { name: 'Kgeyes Residency', logo: 'kgeyes_residency_private_limited.webp' },
    { name: 'Khivraj Tech Park', logo: 'khivraj_tech_park_pvt_ltd.webp' },
    { name: 'Khurinji Homes', logo: 'khurinji_homes_private_limited.webp' },
    { name: 'KLP Projects', logo: 'klp_projects_private_limited.webp' },
    { name: 'Kochar Homes', logo: 'kochar_homes_private_limited.webp' },
    { name: 'KPPL', logo: 'KPPL_LOGO_PNG.webp' },
    { name: 'Krishna Constructions', logo: 'krishna_constructions.webp' },
    { name: 'Kriticons', logo: 'kriticons_limited.webp' },
    { name: 'KVT Homes', logo: 'kvt_homes___estates_private_limited.webp' },
    { name: 'Lancor Holdings', logo: 'lancor_holdings_limited.webp' },
    { name: 'Landmark Housing', logo: 'landmark _housing_projects_chennai_private_limited.webp' },
    { name: 'Landmark Metro', logo: 'landmark-metro.webp' },
    { name: 'Leo Housing', logo: 'leo_housing_private_limited.webp' },
    { name: 'Lifestyle Housing', logo: 'lifestyle_housing___infrastructure.webp' },
    { name: 'LML Homes', logo: 'lucky_mercantile_limited.webp' },
    { name: 'Lyra Properties', logo: 'lyra.webp' },
    { name: 'Mahindra Lifespace', logo: 'mahindra-lifespace.webp' },
    { name: 'Malles Constructions', logo: 'malles_constructions_private_limited.webp' },
    { name: 'Manju Group', logo: 'Manju_Group_Logo.webp' },
    { name: 'Marutham Group', logo: 'marutham_appartment.webp' },
    { name: 'MCB Developers', logo: 'mcb_logo.webp' },
    { name: 'Millennia Realtors', logo: 'millennia-realtors.webp' },
    { name: 'Mohan Mutha', logo: 'mohan_mutha_infrastructures_private_limited.webp' },
    { name: 'MP Developers', logo: 'mp-developers.webp' },
    { name: 'Muktha Foundations', logo: 'muktha_foundations_private_limited.webp' },
    { name: 'Nahar Foundations', logo: 'nahar_foundations_private_limited.webp' },
    { name: 'Narendra Properties', logo: 'narendra_properties_limited.webp' },
    { name: 'Natwest Estates', logo: 'natwest_estates_private_limited.webp' },
    { name: 'Navin Housing', logo: 'navin_housing___properties_private_limited.webp' },
    { name: 'NCC Urban', logo: 'ncc-urban.webp' },
    { name: 'Newry Properties', logo: 'newry_properties_private_limited.webp' },
    { name: 'Nova Lifespaces', logo: 'nova_lifespace_private_limited.webp' },
    { name: 'Nu Tech Realty', logo: 'nu-tech_associates.webp' },
    { name: 'Ocean Lifespaces', logo: 'ocean_lifespaces_india_private_limited.webp' },
    { name: 'Omshakthy Homes', logo: 'om-shakthy.webp' },
    { name: 'Oragadam City', logo: 'oragadam_city_developers_pvt_ltd.webp' },
    { name: 'Ozone Projects', logo: 'ozone_projects_private_limited.webp' },
    { name: 'Pace Builders', logo: 'pace_builders_madras_private_limited.webp' },
    { name: 'Pacifica Companies', logo: 'pacifica_chennai_infrastructure_company_private_limited.webp' },
    { name: 'Paramount Realty', logo: 'paramount-llp.webp' },
    { name: 'Pearl Constructions', logo: 'PC-_Logo-01.webp' },
    { name: 'PKR Estates', logo: 'pkr-estate-llp.webp' },
    { name: 'Plaza Properties', logo: 'plaza_properties_limited.webp' },
    { name: 'Pragnya South City', logo: 'pragnya_south_city_projects_private_limited.webp' },
    { name: 'Prestige Estates', logo: 'prestige_estates_projects_limited.webp' },
    { name: 'Prime Expat Infra', logo: 'prime_expat_infra.webp' },
    { name: 'Priya Construction', logo: 'priyas.webp' },
    { name: 'Provident Housing', logo: 'provident.webp' },
    { name: 'Puravankara Projects', logo: 'puravankara_projects_limited.webp' },
    { name: 'Pushkar Properties', logo: 'pushkar_properties_private_limited.webp' },
    { name: 'Radiance Realty', logo: 'radiance_realty_developers_india_limited.webp' },
    { name: 'Rainbow Foundations', logo: 'rainbow-foundations.webp' },
    { name: 'Rajaratnam Construction', logo: 'rajaratnam_construction_private_limited.webp' },
    { name: 'Rajkham Builders', logo: 'rajkham_builders_private_limited.webp' },
    { name: 'Rajparis Civil', logo: 'rajparis_civil_constructions_limited.webp' },
    { name: 'Ramaniyam Real Estates', logo: 'ramaniyam_real_estates_private_limited.webp' },
    { name: 'Ramaniyam Realtors', logo: 'ramaniyam-realtors-llp.webp' },
    { name: 'Ramky Wavoo', logo: 'ramky_wavoo_developers_private_limited_rwd.webp' },
    { name: 'Rams Real Estates', logo: 'rams-real-estates.webp' },
    { name: 'Raunaq Foundations', logo: 'raunaq_foundations.webp' },
    { name: 'Real Value Promoters', logo: 'real_value_promoters_private_limited.webp' },
    { name: 'Redbrick Constructions', logo: 'redbrick.webp' },
    { name: 'RMK Constructions', logo: 'rmk_construction___housing.webp' },
    { name: 'RMS Infrastructure', logo: 'rms_infrastructure_private_limited.webp' },
    { name: 'Rohaan Constructions', logo: 'rohan_construction.webp' },
    { name: 'Rohini Property', logo: 'rohini-property.webp' },
    { name: 'Romaa Housing', logo: 'romaa_housing_india_private_limited.webp' },
    { name: 'Ruby Builders', logo: 'ruby_builders___promoters.webp' },
    { name: 'Russel Foundations', logo: 'russel.webp' },
    { name: 'S&P Foundation', logo: 's_p_foundation_private_limited.webp' },
    { name: 'S&S Foundations', logo: 's_s_foundations_private_limited.webp' },
    { name: 'Sabari Foundations', logo: 'sabari_foundations___const_(I)_pvt_ltd_new.webp' },
    { name: 'Salma Constructions', logo: 'salma_constructions_private_limited.webp' },
    { name: 'Sameera Estates', logo: 'sameera_estates_private_limited.webp' },
    { name: 'Sameera Lands', logo: 'sameera.webp' },
    { name: 'Santha Build Tech', logo: 'santha_build-tech_india_private_limited.webp' },
    { name: 'Sapthrishi Buildcon', logo: 'sapthrisihi_buildcon_llp.webp' },
    { name: 'Saradeuz Infra', logo: 'saradeuz-infra.webp' },
    { name: 'Shree Venkateswara', logo: 'shree.webp' },
    { name: 'Shriram Properties', logo: 'shriram_properties_private_limited.webp' },
    { name: 'Sidharth Foundation', logo: 'sidharth_foundation___housing_limited.webp' },
    { name: 'Silversky Builders', logo: 'silversky.webp' },
    { name: 'Sobha Ltd', logo: 'sobha_developers_limited.webp' },
    { name: 'South India Shelters', logo: 'south_india_shelters_private_limited.webp' },
    { name: 'Sowmiyaa Properties', logo: 'sowmiya.webp' },
    { name: 'SPR Constructions', logo: 'spr_constructions_private_limited.webp' },
    { name: 'Sreerosh Properties', logo: 'sreerosh_properties_private_limited.webp' },
    { name: 'Sri Ayyan', logo: 'sri-ayyan-constructions.webp' },
    { name: 'Sri City', logo: 'sri_city_private_limited.webp' },
    { name: 'Sri Kausalya', logo: 'sri_kausalya_constructions_limited.webp' },
    { name: 'Sri Kirthika', logo: 'kirthika.webp' },
    { name: 'Sri Lakshmi Homes', logo: 'sri_lakshmi_homes_private_limited.webp' },
    { name: 'SSPDL', logo: 'sspdl_limited.webp' },
    { name: 'Stepsstone Promoters', logo: 'stepsstone_promoters_private_limited.webp' },
    { name: 'Sumanth & Co', logo: 'sumanth___Co..webp' },
    { name: 'Swathi Builders', logo: 'swathi_builders.webp' },
    { name: 'Thai Homes', logo: 'thai_homes.webp' },
    { name: 'The Nest', logo: 'the_nest_builders.webp' },
    { name: 'Traventure Homes', logo: 'traventure.webp' },
    { name: 'True Value Homes', logo: 'true_value_homes_india_private_limited.webp' },
    { name: 'Tulive Developers', logo: 'tulive_developers_limited.webp' },
    { name: 'TVS Emerald', logo: 'tvs_emerald.webp' },
    { name: 'Urban Tree', logo: 'urban_tree_infrastructures_private_limited.webp' },
    { name: 'Urbando Housing', logo: 'urbando.webp' },
    { name: 'Urbanrise Projects', logo: 'urbanrise_projects_llp.webp' },
    { name: 'Vasanth Builders', logo: 'vasant_builders.webp' },
    { name: 'VGK Builders', logo: 'vgk-builders.webp' },
    { name: 'VGN Developers', logo: 'vgn_developers_private_limited.webp' },
    { name: 'VGN Homes', logo: 'vgn_homes_private_limited.webp' },
    { name: 'Vijay Raja Homes', logo: 'vijay_raja_homes_private_limited.webp' },
    { name: 'Vishram Infrastructure', logo: 'vishram_infrastructure_private_limited.webp' },
    { name: 'Vishranthi Homes', logo: 'vishranthi_homes_private_limited.webp' },
    { name: 'Vishwak Properties', logo: 'Vishwak-Properties-Logo.webp' },
    { name: 'Vishwakarma Real Estates', logo: 'vishwakarma_real_estates___constructions_india_private_limited.webp' },
    { name: 'Viva Housing', logo: 'viva.webp' },
    { name: 'VLC Properties', logo: 'vlc-new.webp' },
    { name: 'VNCT Global', logo: 'vnct-global-llp.webp' },
    { name: 'VNR Homes', logo: 'vnr-homes.webp' },
    { name: 'Voora Property', logo: 'voora_property_developers_private_limited.webp' },
    { name: 'Wisdom Housing', logo: 'wisdom.webp' },
    { name: 'XS Real', logo: 'xsreal.webp' },
    { name: 'Yuga Homes', logo: 'yuga_homes_limited.webp' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-900 to-gray-900 text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 mb-6 px-6 py-2 glass rounded-full text-gold-400 font-bold">
              <Building2 className="w-5 h-5" />
              <span>Trusted Developer Partners</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
              Our <span className="text-gradient">Developer Partners</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with trusted real estate developers to bring you exclusive deals and premium properties
            </p>
          </motion.div>
        </div>
      </div>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Featured <span className="text-gradient">Developers</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {partners.length}+ trusted developer partners
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.01 }}
                className="glass-card p-4 rounded-xl hover:shadow-xl transition-all hover:scale-105 bg-white"
              >
                <div className="relative w-full h-24 mb-3 flex items-center justify-center">
                  <Image
                    src={`/partners/${partner.logo}`}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xs font-semibold text-gray-900 text-center line-clamp-2">
                  {partner.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Get <span className="text-gradient">5% Price Advantage</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We negotiate exclusive developer rates for NRI Doctors, passing the savings directly to you
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
