import { PageHeader, SectionCard } from '../components/ui'
const makePage = (title, description) => function Page() { return <section className="page"><PageHeader eyebrow="Unify workspace" title={title} description={description} /><SectionCard title="Coming soon"><p className="empty-state">This section is ready for its feature-specific experience.</p></SectionCard></section> }
export const DashboardPage = makePage('Dashboard', 'A central overview of your university life will appear here.')
export const AcademicPage = makePage('Academic', 'Manage your courses, assignments, grades, and exams in one place.')
export const StudyPage = makePage('Study', 'Keep notes, resources, and study plans organized here.')
export const CampusLifePage = makePage('Campus Life', 'Discover announcements, events, and campus community updates here.')
export const ProfilePage = makePage('Profile', 'View and manage your student profile.')
export const SettingsPage = makePage('Settings', 'Customize your Unify workspace preferences.')
