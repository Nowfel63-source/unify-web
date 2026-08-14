import { Bell, Search } from 'lucide-react'
import { IconButton } from '../ui'

export default function Topbar() { return <header className="topbar"><div className="topbar__welcome"><p>Student workspace</p><span>Stay on top of your semester</span></div><div className="topbar__actions"><button className="search-trigger" type="button"><Search size={18} /><span>Search your workspace</span><kbd>⌘ K</kbd></button><IconButton label="Notifications"><Bell size={19} /></IconButton><button className="user-avatar" type="button" aria-label="Open profile">JS</button></div></header> }
