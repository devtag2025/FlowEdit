const TabNavigation = ({activeTab,onChange}) => {
  const tabs = [
    {
      label: "Overview",
      value: "overview",
    },
    {
        label: "Invoices",
        value: "invoices"
    },
    {
        label: "Payment Details",
        value: "payment" 
    }
  ];


  return(
    <div className="flex justify-center mb-10">
    <div className="flex bg-slate-200 rounded-full shadow-lg p-1 w-4xl justify-around">
    {tabs.map((tab)=> (
        <button 
        key={tab.value}
        onClick={()=> onChange(tab.value)}
        className={`text-black px-6 py-2 rounded-full transition font-semibold flex-1
        ${
        activeTab === tab.value ? "bg-white text-accent" :  "text-slate-500"}`}>
        {tab.label}
        </button>
    ))}
    </div>
    </div>
  )
};

export default TabNavigation;
