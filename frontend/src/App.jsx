import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import { AcademicPage, CampusLifePage, DashboardPage, ProfilePage, SettingsPage, StudyPage } from './pages'
import { academicRoutes, campusLifeRoutes, profileRoutes, settingsRoutes, studyRoutes } from './routes/routes'
import { PageHeader, SectionCard } from './components/ui'

function PlaceholderPage({ title }) { return <section className="page"><PageHeader eyebrow="Unify workspace" title={title} description="This area is planned for a future iteration." /><SectionCard title="Coming soon"><p className="empty-state">The foundations are in place for this feature.</p></SectionCard></section> }
function App() {
  const plannedRoutes = [...academicRoutes, ...studyRoutes, ...campusLifeRoutes, ...profileRoutes, ...settingsRoutes]
  return <Routes><Route element={<AppLayout />}><Route path="/dashboard" element={<DashboardPage />} /><Route path="/academic" element={<AcademicPage />} /><Route path="/study" element={<StudyPage />} /><Route path="/campus-life" element={<CampusLifePage />} /><Route path="/profile" element={<ProfilePage />} /><Route path="/settings" element={<SettingsPage />} />{plannedRoutes.map(({ path, title }) => <Route key={path} path={path} element={<PlaceholderPage title={title} />} />)}</Route><Route path="*" element={<Navigate to="/dashboard" replace />} /></Routes>
}
export default App
