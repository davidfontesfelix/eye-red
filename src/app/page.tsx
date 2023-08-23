import ApplicationInformation from '@/components/views/ApplicationInformation'
import Footer from '@/components/views/Footer'
import Header from '@/components/views/Header'
import Nav from '@/components/views/Nav'
import Plans from '@/components/views/Plans'
import TermsOfUse from '@/components/views/TermsOfUser'

export default function Home() {
  return (
    <div className="bg-black">
      <Nav />
      <div className="flex flex-col">
        <Header />
        <ApplicationInformation />
        <Plans />
        <TermsOfUse />
        <Footer />
      </div>
    </div>
  )
}
