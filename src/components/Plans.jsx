import styles from "../style";
import Button from "./Button";
import { Button1 } from "./Button";

const PlanCard = ({ title, features, price }) => (
 <div className="border border-purple hover:border-blue-700 mr-4 rounded-xl overflow-hidden relative bg-black-gradient shadow-lg flex flex-col items-center p-6 w-full hover:-translate-y-4 transform transition duration-300 hover:shadow-2xl mb-4 sm:mb-0" style={{ boxShadow: '0 0 20px 10px purple' }}>
    <h3 className={`${styles.heading2} text-white mb-4 text-center`}>
      {title}
    </h3>
    <h4 className="text-white text-5xl font-bold mb-4">
      {price}
    </h4>
    <Button1 className="bg-dark-blue w-1/2 h-full mb-4" text= {"Select"}/>
    <ul className="list-none w-full">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center border-b border-gray-200 py-2">
          <div className="bg-purple-500 rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-4 w-4 text-black">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-white ml-2">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Plans = () => (
  <section className="flex flex-col sm:flex-row justify-between ">
    <PlanCard title="Basic Plan" features={['Feature 1', 'Feature 2', 'Feature 3']} price="$10" />
    <PlanCard title="Premium Plan" features={['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']} price="$100" />
    <PlanCard title="Enterprise Plan" features={['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5']} price="Custom" />
  </section>
);

export default Plans;