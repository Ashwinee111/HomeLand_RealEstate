// import house images
import House1 from './assets/img/houses/house1.png';
import House2 from './assets/img/houses/house2.png';
import House3 from './assets/img/houses/house3.png';
import House4 from './assets/img/houses/house4.png';
import House5 from './assets/img/houses/house5.png';
import House6 from './assets/img/houses/house6.png';
import House7 from './assets/img/houses/house7.png';
import House8 from './assets/img/houses/house8.png';
import House9 from './assets/img/houses/house9.png';
import House10 from './assets/img/houses/house10.png';
import House11 from './assets/img/houses/house11.png';
import House12 from './assets/img/houses/house12.png';
// import house large images
import House1Lg from './assets/img/houses/house1lg.png';
import House2Lg from './assets/img/houses/house2lg.png';
import House3Lg from './assets/img/houses/house3lg.png';
import House4Lg from './assets/img/houses/house4lg.png';
import House5Lg from './assets/img/houses/house5lg.png';
import House6Lg from './assets/img/houses/house6lg.png';
import House7Lg from './assets/img/houses/house7lg.png';
import House8Lg from './assets/img/houses/house8lg.png';
import House9Lg from './assets/img/houses/house9lg.png';
import House10Lg from './assets/img/houses/house10lg.png';
import House11Lg from './assets/img/houses/house11lg.png';
import House12Lg from './assets/img/houses/house12lg.png';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.png';
import Apartment2 from './assets/img/apartments/a2.png';
import Apartment3 from './assets/img/apartments/a3.png';
import Apartment4 from './assets/img/apartments/a4.png';
import Apartment5 from './assets/img/apartments/a5.png';
import Apartment6 from './assets/img/apartments/a6.png';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1lg.png';
import Apartment2Lg from './assets/img/apartments/a2lg.png';
import Apartment3Lg from './assets/img/apartments/a3lg.png';
import Apartment4Lg from './assets/img/apartments/a4lg.png';
import Apartment5Lg from './assets/img/apartments/a5lg.png';
import Apartment6Lg from './assets/img/apartments/a6lg.png';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';

export const housesData = [
  {
    id: 1,
    type: 'House',
    name: 'House 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House1,
    imageLg: House1Lg,
    country: 'United States',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '110000',
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
    },
  },
  {
    id: 2,
    type: 'House',
    name: 'House 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House2,
    imageLg: House2Lg,
    country: 'Canada',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '140000',
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
    },
  },
  {
    id: 3,
    type: 'House',
    name: 'House 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House3,
    imageLg: House3Lg,
    country: 'United States',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '170000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
  },
  {
    id: 4,
    type: 'House',
    name: 'House 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House4,
    imageLg: House4Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2016',
    price: '200000',
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
    },
  },
  {
    id: 5,
    type: 'House',
    name: 'House 5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House5,
    imageLg: House5Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2015',
    price: '210000',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
  },
  {
    id: 6,
    type: 'House',
    name: 'House 6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House6,
    imageLg: House6Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2014',
    price: '220000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
  {
    id: 7,
    type: 'Apartament',
    name: 'Apartament 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2012',
    price: '20000',
    agent: {
      image: Agent7,
      name: 'Jawhar Shamil Naser',
      phone: '0123 456 78910',
    },
  },
  {
    id: 8,
    type: 'Apartament',
    name: 'Apartament 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2011',
    price: '30000',
    agent: {
      image: Agent8,
      name: 'Juana Douglass',
      phone: '0123 456 78910',
    },
  },
  {
    id: 9,
    type: 'Apartament',
    name: 'Apartament 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: 'United States',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1100 sq ft',
    year: '2011',
    price: '40000',
    agent: {
      image: Agent9,
      name: 'Jerry Schenck',
      phone: '0123 456 78910',
    },
  },
  {
    id: 10,
    type: 'House',
    name: 'House 7',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House7,
    imageLg: House7Lg,
    country: 'Canada',
    address: '7240C Argyle St. Lawndale, CA 90260',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3200 sq ft',
    year: '2015',
    price: '117000',
    agent: {
      image: Agent10,
      name: 'Vera Levesque',
      phone: '0123 456 78910',
    },
  },
  {
    id: 11,
    type: 'House',
    name: 'House 8',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House8,
    imageLg: House8Lg,
    country: 'Canada',
    address: '798 Talbot St. Bridgewater, NJ 08807',
    bedrooms: '7',
    bathrooms: '2',
    surface: '2200 sq ft',
    year: '2019',
    price: '145000',
    agent: {
      image: Agent11,
      name: 'Sofia Gomes',
      phone: '0123 456 78910',
    },
  },
  {
    id: 12,
    type: 'House',
    name: 'House 9',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House9,
    imageLg: House9Lg,
    country: 'United States',
    address: '2 Glen Creek St. Alexandria, VA 22304',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4600 sq ft',
    year: '2015',
    price: '139000',
    agent: {
      image: Agent12,
      name: 'Raymond Hood',
      phone: '0123 456 78910',
    },
  },
  {
    id: 13,
    type: 'House',
    name: 'House 10',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House10,
    imageLg: House10Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '5',
    bathrooms: '2',
    surface: '5200 sq ft',
    year: '2014',
    price: '180000',
    agent: {
      image: Agent1,
      name: 'Patricia Tullert',
      phone: '0123 456 78910',
    },
  },
  {
    id: 14,
    type: 'House',
    name: 'House 11',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House11,
    imageLg: House11Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '5',
    bathrooms: '2',
    surface: '3200 sq ft',
    year: '2011',
    price: '213000',
    agent: {
      image: Agent2,
      name: 'Daryl Hawker',
      phone: '0123 456 78910',
    },
  },
  {
    id: 15,
    type: 'House',
    name: 'House 12',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House12,
    imageLg: House12Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '4',
    bathrooms: '3',
    surface: '5200 sq ft',
    year: '2013',
    price: '221000',
    agent: {
      image: Agent3,
      name: 'Amado Smith',
      phone: '0123 456 78910',
    },
  },
  {
    id: 16,
    type: 'Apartament',
    name: 'Apartament 16',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: 'Canada',
    address: '32 Pawnee Street Butte, MT 59701',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1300 sq ft',
    year: '2011',
    price: '21000',
    agent: {
      image: Agent4,
      name: 'Kaitlyn Gonzalez',
      phone: '0123 456 78910',
    },
  },
  {
    id: 17,
    type: 'Apartament',
    name: 'Apartament 17',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: 'United States',
    address: '28 Westport Dr. Warminster, PA 18974',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2012',
    price: '32000',
    agent: {
      image: Agent5,
      name: 'Grover Robinson',
      phone: '0123 456 78910',
    },
  },
  {
    id: 18,
    type: 'Apartament',
    name: 'Apartament 18',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: 'Canada',
    address: '84 Woodland St. Cocoa, FL 32927',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2010',
    price: '38000',
    agent: {
      image: Agent6,
      name: 'Karen Sorensen',
      phone: '0123 456 78910',
    },
  },
];



export const countryCode = [
  {
      "country": "Afghanistan",
      "code": "+93"
  },
  {
      "country": "Albania",
      "code": "+355"
  },
  {
      "country": "Algeria",
      "code": "+213"
  },
  {
      "country": "Andorra",
      "code": "+376"
  },
  {
      "country": "Angola",
      "code": "+244"
  },
  {
      "country": "Antigua and Barbuda",
      "code": "+1-268"
  },
  {
      "country": "Argentina",
      "code": "+54"
  },
  {
      "country": "Armenia",
      "code": "+374"
  },
  {
      "country": "Australia",
      "code": "+61"
  },
  {
      "country": "Austria",
      "code": "+43"
  },
  {
      "country": "Azerbaijan",
      "code": "+994"
  },
  {
      "country": "Bahamas",
      "code": "+1-242"
  },
  {
      "country": "Bahrain",
      "code": "+973"
  },
  {
      "country": "Bangladesh",
      "code": "+880"
  },
  {
      "country": "Barbados",
      "code": "+1-246"
  },
  {
      "country": "Belarus",
      "code": "+375"
  },
  {
      "country": "Belgium",
      "code": "+32"
  },
  {
      "country": "Belize",
      "code": "+501"
  },
  {
      "country": "Benin",
      "code": "+229"
  },
  {
      "country": "Bhutan",
      "code": "+975"
  },
  {
      "country": "Bolivia",
      "code": "+591"
  },
  {
      "country": "Bosnia and Herzegovina",
      "code": "+387"
  },
  {
      "country": "Botswana",
      "code": "+267"
  },
  {
      "country": "Brazil",
      "code": "+55"
  },
  {
      "country": "Brunei",
      "code": "+673"
  },
  {
      "country": "Bulgaria",
      "code": "+359"
  },
  {
      "country": "Burkina Faso",
      "code": "+226"
  },
  {
      "country": "Burundi",
      "code": "+257"
  },
  {
      "country": "Cambodia",
      "code": "+855"
  },
  {
      "country": "Cameroon",
      "code": "+237"
  },
  {
      "country": "Canada",
      "code": "+1"
  },
  {
      "country": "Cape Verde",
      "code": "+238"
  },
  {
      "country": "Central African Republic",
      "code": "+236"
  },
  {
      "country": "Chad",
      "code": "+235"
  },
  {
      "country": "Chile",
      "code": "+56"
  },
  {
      "country": "China",
      "code": "+86"
  },
  {
      "country": "Colombia",
      "code": "+57"
  },
  {
      "country": "Comoros",
      "code": "+269"
  },
  {
      "country": "Congo",
      "code": "+242"
  },
  {
      "country": "Costa Rica",
      "code": "+506"
  },
  {
      "country": "Croatia",
      "code": "+385"
  },
  {
      "country": "Cuba",
      "code": "+53"
  },
  {
      "country": "Cyprus",
      "code": "+357"
  },
  {
      "country": "Czech Republic",
      "code": "+420"
  },
  {
      "country": "Denmark",
      "code": "+45"
  },
  {
      "country": "Djibouti",
      "code": "+253"
  },
  {
      "country": "Dominica",
      "code": "+1-767"
  },
  {
      "country": "Dominican Republic",
      "code": "+1-809, +1-829, +1-849"
  },
  {
      "country": "East Timor",
      "code": "+670"
  },
  {
      "country": "Ecuador",
      "code": "+593"
  },
  {
      "country": "Egypt",
      "code": "+20"
  },
  {
      "country": "El Salvador",
      "code": "+503"
  },
  {
      "country": "Equatorial Guinea",
      "code": "+240"
  },
  {
      "country": "Eritrea",
      "code": "+291"
  },
  {
      "country": "Estonia",
      "code": "+372"
  },
  {
      "country": "Ethiopia",
      "code": "+251"
  },
  {
      "country": "Fiji",
      "code": "+679"
  },
  {
      "country": "Finland",
      "code": "+358"
  },
  {
      "country": "France",
      "code": "+33"
  },
  {
      "country": "Gabon",
      "code": "+241"
  },
  {
      "country": "Gambia",
      "code": "+220"
  },
  {
      "country": "Georgia",
      "code": "+995"
  },
  {
      "country": "Germany",
      "code": "+49"
  },
  {
      "country": "Ghana",
      "code": "+233"
  },
  {
      "country": "Greece",
      "code": "+30"
  },
  {
      "country": "Grenada",
      "code": "+1-473"
  },
  {
      "country": "Guatemala",
      "code": "+502"
  },
  {
      "country": "Guinea",
      "code": "+224"
  },
  {
      "country": "Guinea-Bissau",
      "code": "+245"
  },
  {
      "country": "Guyana",
      "code": "+592"
  },
  {
      "country": "Haiti",
      "code": "+509"
  },
  {
      "country": "Honduras",
      "code": "+504"
  },
  {
      "country": "Hungary",
      "code": "+36"
  },
  {
      "country": "Iceland",
      "code": "+354"
  },
  {
      "country": "India",
      "code": "+91"
  },
  {
      "country": "Indonesia",
      "code": "+62"
  },
  {
      "country": "Iran",
      "code": "+98"
  },
  {
      "country": "Iraq",
      "code": "+964"
  },
  {
      "country": "Ireland",
      "code": "+353"
  },
  {
      "country": "Israel",
      "code": "+972"
  },
  {
      "country": "Italy",
      "code": "+39"
  },
  {
      "country": "Jamaica",
      "code": "+1-876"
  },
  {
      "country": "Japan",
      "code": "+81"
  },
  {
      "country": "Jordan",
      "code": "+962"
  },
  {
      "country": "Kazakhstan",
      "code": "+7"
  },
  {
      "country": "Kenya",
      "code": "+254"
  },
  {
      "country": "Kiribati",
      "code": "+686"
  },
  {
      "country": "Kosovo",
      "code": "+383"
  },
  {
      "country": "Kuwait",
      "code": "+965"
  },
  {
      "country": "Kyrgyzstan",
      "code": "+996"
  },
  {
      "country": "Laos",
      "code": "+856"
  },
  {
      "country": "Latvia",
      "code": "+371"
  },
  {
      "country": "Lebanon",
      "code": "+961"
  },
  {
      "country": "Lesotho",
      "code": "+266"
  },
  {
      "country": "Liberia",
      "code": "+231"
  },
  {
      "country": "Libya",
      "code": "+218"
  },
  {
      "country": "Liechtenstein",
      "code": "+423"
  },
  {
      "country": "Lithuania",
      "code": "+370"
  },
  {
      "country": "Luxembourg",
      "code": "+352"
  },
  {
      "country": "Macedonia",
      "code": "+389"
  },
  {
      "country": "Madagascar",
      "code": "+261"
  },
  {
      "country": "Malawi",
      "code": "+265"
  },
  {
      "country": "Malaysia",
      "code": "+60"
  },
  {
      "country": "Maldives",
      "code": "+960"
  },
  {
      "country": "Mali",
      "code": "+223"
  },
  {
      "country": "Malta",
      "code": "+356"
  },
  {
      "country": "Marshall Islands",
      "code": "+692"
  },
  {
      "country": "Mauritania",
      "code": "+222"
  },
  {
      "country": "Mauritius",
      "code": "+230"
  },
  {
      "country": "Mexico",
      "code": "+52"
  },
  {
      "country": "Micronesia",
      "code": "+691"
  },
  {
      "country": "Moldova",
      "code": "+373"
  },
  {
      "country": "Monaco",
      "code": "+377"
  },
  {
      "country": "Mongolia",
      "code": "+976"
  },
  {
      "country": "Montenegro",
      "code": "+382"
  },
  {
      "country": "Morocco",
      "code": "+212"
  },
  {
      "country": "Mozambique",
      "code": "+258"
  },
  {
      "country": "Myanmar",
      "code": "+95"
  },
  {
      "country": "Namibia",
      "code": "+264"
  },
  {
      "country": "Nauru",
      "code": "+674"
  },
  {
      "country": "Nepal",
      "code": "+977"
  },
  {
      "country": "Netherlands",
      "code": "+31"
  },
  {
      "country": "New Zealand",
      "code": "+64"
  },
  {
      "country": "Nicaragua",
      "code": "+505"
  },
  {
      "country": "Niger",
      "code": "+227"
  },
  {
      "country": "Nigeria",
      "code": "+234"
  },
  {
      "country": "North Korea",
      "code": "+850"
  },
  {
      "country": "Norway",
      "code": "+47"
  },
  {
      "country": "Oman",
      "code": "+968"
  },
  {
      "country": "Pakistan",
      "code": "+92"
  },
  {
      "country": "Palau",
      "code": "+680"
  },
  {
      "country": "Palestine",
      "code": "+970"
  },
  {
      "country": "Panama",
      "code": "+507"
  },
  {
      "country": "Papua New Guinea",
      "code": "+675"
  },
  {
      "country": "Paraguay",
      "code": "+595"
  },
  {
      "country": "Peru",
      "code": "+51"
  },
  {
      "country": "Philippines",
      "code": "+63"
  },
  {
      "country": "Poland",
      "code": "+48"
  },
  {
      "country": "Portugal",
      "code": "+351"
  },
  {
      "country": "Qatar",
      "code": "+974"
  },
  {
      "country": "Romania",
      "code": "+40"
  },
  {
      "country": "Russia",
      "code": "+7"
  },
  {
      "country": "Rwanda",
      "code": "+250"
  },
  {
      "country": "Saint Kitts and Nevis",
      "code": "+1-869"
  },
  {
      "country": "Saint Lucia",
      "code": "+1-758"
  },
  {
      "country": "Saint Vincent and the Grenadines",
      "code": "+1-784"
  },
  {
      "country": "Samoa",
      "code": "+685"
  },
  {
      "country": "San Marino",
      "code": "+378"
  },
  {
      "country": "Sao Tome and Principe",
      "code": "+239"
  },
  {
      "country": "Saudi Arabia",
      "code": "+966"
  },
  {
      "country": "Senegal",
      "code": "+221"
  },
  {
      "country": "Serbia",
      "code": "+381"
  },
  {
      "country": "Seychelles",
      "code": "+248"
  },
  {
      "country": "Sierra Leone",
      "code": "+232"
  },
  {
      "country": "Singapore",
      "code": "+65"
  },
  {
      "country": "Slovakia",
      "code": "+421"
  },
  {
      "country": "Slovenia",
      "code": "+386"
  },
  {
      "country": "Solomon Islands",
      "code": "+677"
  },
  {
      "country": "Somalia",
      "code": "+252"
  },
  {
      "country": "South Africa",
      "code": "+27"
  },
  {
      "country": "South Korea",
      "code": "+82"
  },
  {
      "country": "South Sudan",
      "code": "+211"
  },
  {
      "country": "Spain",
      "code": "+34"
  },
  {
      "country": "Sri Lanka",
      "code": "+94"
  },
  {
      "country": "Sudan",
      "code": "+249"
  },
  {
      "country": "Suriname",
      "code": "+597"
  },
  {
      "country": "Swaziland",
      "code": "+268"
  },
  {
      "country": "Sweden",
      "code": "+46"
  },
  {
      "country": "Switzerland",
      "code": "+41"
  },
  {
      "country": "Syria",
      "code": "+963"
  },
  {
      "country": "Taiwan",
      "code": "+886"
  },
  {
      "country": "Tajikistan",
      "code": "+992"
  },
  {
      "country": "Tanzania",
      "code": "+255"
  },
  {
      "country": "Thailand",
      "code": "+66"
  },
  {
      "country": "Togo",
      "code": "+228"
  },
  {
      "country": "Tonga",
      "code": "+676"
  },
  {
      "country": "Trinidad and Tobago",
      "code": "+1-868"
  },
  {
      "country": "Tunisia",
      "code": "+216"
  },
  {
      "country": "Turkey",
      "code": "+90"
  },
  {
      "country": "Turkmenistan",
      "code": "+993"
  },
  {
      "country": "Tuvalu",
      "code": "+688"
  },
  {
      "country": "Uganda",
      "code": "+256"
  },
  {
      "country": "Ukraine",
      "code": "+380"
  },
  {
      "country": "United Arab Emirates",
      "code": "+971"
  },
  {
      "country": "United Kingdom",
      "code": "+44"
  },
  {
      "country": "United States",
      "code": "+1"
  },
  {
      "country": "Uruguay",
      "code": "+598"
  },
  {
      "country": "Uzbekistan",
      "code": "+998"
  },
  {
      "country": "Vanuatu",
      "code": "+678"
  },
  {
      "country": "Vatican City",
      "code": "+39-06, +379"
  },
  {
      "country": "Venezuela",
      "code": "+58"
  },
  {
      "country": "Vietnam",
      "code": "+84"
  },
  {
      "country": "Yemen",
      "code": "+967"
  },
  {
      "country": "Zambia",
      "code": "+260"
  },
  {
      "country": "Zimbabwe",
      "code": "+263"
  }
]