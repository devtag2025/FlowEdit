import { Check } from "lucide-react";

const PlanCard = ({ plan }) => {
  return (
    <div
      className={`bg-slate-200 rounded-2xl p-8 flex flex-col transition
        ${
          plan.highlighted
            ? "shadow-lg scale-[1.05]"
            : "border-slate-200 bg-slate-50"
        }`}
    >
      <h3 className="text-xl text-center font-semibold text-slate-600 mb-1">
        {plan.title}
      </h3>

      <div className="my-3 text-center">
        <span className="text-5xl font-bold text-accent">{plan.price}</span>
        <span className="text-slate-600"> / month</span>
      </div>

      <p className="text-center text-slate-600 mb-10">{plan.description}</p>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-accent">
            <span
              className={`h-6 w-6 flex items-center justify-center rounded-full text-slate-600
          ${plan.highlighted ? "bg-slate-300" : "bg-white"}`}
            >
              <Check size={15} />
            </span>

           {feature}
          </li>
        ))}
      </ul>

      <button
        className={`rounded-xl py-3 transition
          ${
            plan.highlighted
              ? "bg-slate-200 text-slate-400 shadow-xl"
              : "bg-white text-accent"
          }`}
      >
        {plan.buttonText}
      </button>
    </div>
  );
};

export default PlanCard;
