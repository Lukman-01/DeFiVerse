import { AlertTriangle, Book } from "lucide-react"
import DeFiStack from "~~/components/DeFiFundamentals/DeFiStack"
import RiskAndSecurity from "~~/components/DeFiFundamentals/RiskAndSecurity"
import TraditionalFinance from "~~/components/DeFiFundamentals/TraditionalFinance"
import WhatIsFinance from "~~/components/DeFiFundamentals/WhatIsFinance"
import WhyLearnDeFi from "~~/components/DeFiFundamentals/WhyLearnDeFi"
import WhatIsDeFi from "~~/components/DeFiFundamentals/WhatIsDeFi"

export const DefiFundamentals = [
    {
      title: "What is Finance?",
      icon: <Book className="w-5 h-5" />,
      component: <WhatIsFinance />,
    },
    {
      title: "Traditional Finance",
      icon: <Book className="w-5 h-5" />,
      component: <TraditionalFinance />,
    },
    {
      title: "What is DeFi?",
      icon: <Book className="w-5 h-5" />,
      component: <WhatIsDeFi />,
    },
    {
      title: "Why Learn DeFi?",
      icon: <Book className="w-5 h-5" />,
      component: <WhyLearnDeFi />,
    },
    {
      title: "DeFi Stack",
      icon: <Book className="w-5 h-5" />,
      component: <DeFiStack />,
    },
    {
      title: "Risk & Security",
      icon: <AlertTriangle className="w-5 h-5" />,
      component: <RiskAndSecurity />,
    },
  ]