import type { Metadata } from 'next';
import PilotPage from '@/components/PilotPage';
import { PILOT_CONTENT } from '@/lib/pilot-content';
export const metadata: Metadata = { title:PILOT_CONTENT[0].title,description:PILOT_CONTENT[0].description,alternates:{canonical:'https://adualliance.com/'} };
export default function HomePage(){return <PilotPage index={0}/>;}
