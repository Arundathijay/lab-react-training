import './App.css';
import visaLogo from './assets/images/visa.png';
import masterCard from './assets/images/master-card.svg';

const IdCard = (props) => {
  return (
    <div className="id-card">
      <img src={props.picture} alt="" />
      <ul>
        <li>
          <strong>First name:</strong>
          {props.firstName}
        </li>
        <li>
          <strong>Last name:</strong>
          {props.lastName}
        </li>
        <li>
          <strong>Gender:</strong>
          {props.gender}
        </li>
        <li>
          <strong>Height:</strong>
          {props.height / 100}
        </li>
        <li>
          <strong>Birth:</strong>
          {props.birth.toDateString()}
        </li>
      </ul>
    </div>
  );
};

const Greetings = (props) => {
  let greeting;
  switch (props.lang) {
    case 'en':
      greeting = 'Hello';
      break;
    case 'es':
      greeting = 'Hola';
      break;
    case 'de':
      greeting = 'Hallo';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    default:
  }
  return (
    <div className="greetings">
      {greeting}
      {props.children}
    </div>
  );
};

const Random = (props) => {
  return (
    <div className="random">
      Random value betweeen {props.min} and {props.max} =&gt;{' '}
      {Math.random() * (props.max - props.min)}
    </div>
  );
};

const ComponentToHex = (c) => {
  const hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
};

const rgbToHex = (r, g, b) => {
  return `#${ComponentToHex(r)}${ComponentToHex(g)}${ComponentToHex(b)}`;
};

const BoxColor = (props) => {
  const color = `rgb(${props.r}, ${props.g}, ${props.b})`;
  const hexColor = rgbToHex(props.r, props.g, props.b);
  const lightBackground = props.r + props.g + props.b > (255 * 3) / 2;

  return (
    <div
      className="box-color"
      style={{
        backgroundColor: color,
        color: lightBackground ? 'black' : 'white',
      }}
    >
      {color}
      <br />
      {hexColor}
    </div>
  );
};

const CreditCard = (props) => {
  const lastDigits = props.number.slice(props.number.length - 4);
  const censoredNumber = `.... .... ....${lastDigits}`;
  const typeSource = props.type === 'Visa' ? visaLogo : masterCard;
  return (
    <div
      className="credit-card"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      {' '}
      <img className="img" src="{typeSource}" alt="logo" />
      {censoredNumber}
      <br />
      Expires {props.expirationMonth}/{props.expirationYear - 2000} {props.bank}
      <br />
      {props.owner}
      <br />
    </div>
  );
};

const Rating = (props) => {
  const rate = Math.random() * Number(props.children);
  const zeroCount = 5 - rate;
  return (
    <div className="rating">
      {'★'.repeat(rate)}
      {'☆'.repeat(zeroCount)}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />

      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />

      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
    </div>
  );
}

export default App;
