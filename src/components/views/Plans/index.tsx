import Heading from '@/components/Heading'
import { PlansCardRoot } from './PlansCards'

export default function Plans() {
  return (
    <section className="flex h-full w-full flex-col items-center bg-[#242424] px-[10%] text-center text-white">
      <Heading>Escolha seu plano</Heading>
      <h3 className="mb-10 mt-4 text-2xl font-medium phone:text-base">
        Explore os recursos de proteção em cada uma de nossas soluções abaixo.
      </h3>
      <div className="mb-12 flex w-full flex-row flex-wrap justify-center gap-4 phone:mb-0 phone:flex-col phone:gap-1 tablet:mb-0 tablet:flex-col tablet:gap-2">
        <PlansCardRoot.Card title="Plano Castor" color="bg-[#A6A414]">
          <PlansCardRoot.Infos>
            Proteção Anti-Virus, Anti-Malware e Anti-Ransomware
          </PlansCardRoot.Infos>
          <PlansCardRoot.Infos>Detecção de stalkerware</PlansCardRoot.Infos>
        </PlansCardRoot.Card>
        <PlansCardRoot.Card
          title="Plano Lobo"
          color="bg-[#2393D9]"
          price="29,90"
        >
          <PlansCardRoot.Infos>
            Proteção Anti-Virus, Anti-Malware e Anti-Ransomware
          </PlansCardRoot.Infos>
          <PlansCardRoot.Infos>Detecção de stalkerware</PlansCardRoot.Infos>
          <PlansCardRoot.Infos>Navegação segura na Web</PlansCardRoot.Infos>
          <PlansCardRoot.Infos>Remoção de vírus existente</PlansCardRoot.Infos>
        </PlansCardRoot.Card>
        <PlansCardRoot.Card
          title="Plano Coruja"
          color="bg-[#7E1515]"
          price="49,90"
        >
          <PlansCardRoot.Infos>
            Proteção Anti-Virus, Anti-Malware e Anti-Ransomware
          </PlansCardRoot.Infos>
          <PlansCardRoot.Infos>Detecção de stalkerware</PlansCardRoot.Infos>
          <PlansCardRoot.Infos>Navegação segura na Web</PlansCardRoot.Infos>
          <PlansCardRoot.Infos>Remoção de vírus existente</PlansCardRoot.Infos>
          <PlansCardRoot.Infos>Antiphishing</PlansCardRoot.Infos>
          <PlansCardRoot.Infos>Firewall bidirecional</PlansCardRoot.Infos>
          <PlansCardRoot.Infos>Proteção de pagamentos</PlansCardRoot.Infos>
        </PlansCardRoot.Card>
      </div>
    </section>
  )
}
