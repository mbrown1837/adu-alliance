import type { Metadata } from 'next';
import Link from 'next/link';
import GhlLeadForm from '@/components/GhlLeadForm';
import AssessmentContext from '@/components/AssessmentContext';
export const metadata: Metadata = {
 title:'Request an Orange County ADU Assessment | ADU Alliance',
 description:'Share your Orange County property and ADU goals. Discuss project options, information needed for a property review and independent contractor connections.',
 alternates:{canonical:'https://adualliance.com/free-feasibility'}
};
export default function FreeFeasibilityPage(){
 return <div className="pilot-page">
  <header className="pilot-text-hero"><h1>Tell Us About Your Orange County ADU</h1><p>Share your location, project goals and whether you already have plans. Start a conversation about suitable options and the information needed for a property-specific review.</p></header>
  <AssessmentContext />
  <div className="assessment-layout"><section aria-label="Property assessment survey"><GhlLeadForm minHeight="820px"/></section>
  <aside><h2>What Happens Next?</h2><ol className="assessment-steps"><li><h3>Describe your project</h3><p>Include your city, intended use and current planning stage. Let the planning desk know your preferred contact method.</p></li><li><h3>Discuss the next information needed</h3><p>Your property may need drawings, surveys or specialist review before a detailed proposal can be prepared.</p></li><li><h3>Confirm the provider and scope</h3><p>Discuss independent contractor connections and confirm availability, responsibilities and terms directly with the selected provider.</p></li></ol><p>An initial enquiry is not a permit, construction quote or guarantee of suitability.</p><p><a href="tel:+19498229561" className="pilot-button">Call (949) 822-9561</a></p><p>Review the <Link href="/privacy">Privacy Policy</Link> and <Link href="/terms">Terms</Link>, together with the choices shown in the survey, before submitting.</p></aside></div>
 </div>;
}