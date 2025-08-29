import React from 'react';

function SubscriptionPlans() {
  const plansData = [
    { name: 'Sparkler', price: '$9', description: 'Perfect for getting started.', features: ['Access to 10 core subjects', 'Basic progress tracking', 'Email support'], detailedPerks: [{ title: 'Core Subject Library', text: 'Engage with our foundational library.' }, { title: 'Weekly Reports', text: 'Receive a summary of activity.' }] },
    { name: 'Explorer', price: '$19', description: 'Our most popular plan.', features: ['Access to all 50+ subjects', 'Detailed parent dashboard', 'Offline learning kits', 'Priority support'], detailedPerks: [{ title: 'Full Subject Access', text: 'Unlock our entire library.' }, { title: 'Real-Time Dashboard', text: 'Monitor progress live.' }, { title: 'Monthly Kits', text: 'Receive a hands-on activity kit.' }], popular: true },
    { name: 'Visionary', price: '$29', description: 'The ultimate family package.', features: ['All Explorer features', 'Up to 4 child profiles', '1-on-1 tutor sessions', 'Phone & chat support'], detailedPerks: [{ title: 'Family Accounts', text: 'Manage paths for up to 4 children.' }, { title: 'Tutor Connect', text: 'Get two 30-min tutor sessions/month.' }] },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {plansData.map((plan, index) => (
          <div key={index} className={`group relative rounded-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-emerald-900/50 ${plan.popular ? 'shadow-xl' : 'shadow-lg'}`}>
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-white/20 rounded-2xl p-8 flex flex-col h-full text-center overflow-hidden">
              {plan.popular && <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">Most Popular</div>}
              <div className="flex-shrink-0"><h3 className="text-2xl font-bold text-gray-800 dark:text-white">{plan.name}</h3><p className="mt-2 text-gray-600 dark:text-gray-300 h-12">{plan.description}</p><p className="mt-6"><span className="text-5xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span><span className="text-base font-medium text-gray-500 dark:text-gray-400">/month</span></p></div>
              <div className="relative flex-grow mt-6">
                <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-left transition-opacity duration-300 group-hover:opacity-0">{plan.features.map((feature, i) => (<li key={i} className="flex items-center"><svg className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg><span>{feature}</span></li>))}</ul>
                <div className="absolute inset-0 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-4 text-left transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex flex-col">
                    <h4 className="font-bold text-gray-700 dark:text-gray-200 mb-4 flex-shrink-0">What's Inside:</h4>
                    <ul className="space-y-4 overflow-y-auto">{plan.detailedPerks.map((perk, i) => (<li key={i}><p className="font-semibold text-gray-800 dark:text-gray-100">{perk.title}</p><p className="text-sm text-gray-600 dark:text-gray-400">{perk.text}</p></li>))}</ul>
                </div>
              </div>
              <div className="flex-shrink-0 mt-8"><a href="#" className="block w-full text-center rounded-lg px-6 py-3 text-lg font-semibold transition-colors duration-300 bg-transparent border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white">Choose {plan.name}</a></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubscriptionPlans;
