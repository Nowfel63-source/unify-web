import { forwardRef } from 'react'

export function BentoGrid({ children, className = '' }) { return <div className={`bento-grid ${className}`.trim()}>{children}</div> }
export function BentoCard({ children, className = '', span = 'default', rowSpan, ...props }) { return <section className={`bento-card bento-card--${span} ${rowSpan ? `bento-card--${rowSpan}` : ''} ${className}`.trim()} {...props}>{children}</section> }
export function Card({ children, className = '', ...props }) { return <section className={`card ${className}`.trim()} {...props}>{children}</section> }
export function StatCard({ label, value, detail, icon: Icon, className = '' }) { return <Card className={`stat-card ${className}`.trim()}>{Icon && <span className="stat-card__icon"><Icon size={20} strokeWidth={2} /></span>}<p className="eyebrow">{label}</p><p className="stat-card__value">{value}</p>{detail && <p className="stat-card__detail">{detail}</p>}</Card> }
export function SectionCard({ title, action, children, className = '' }) { return <Card className={`section-card ${className}`.trim()}>{(title || action) && <div className="section-card__header"><h2>{title}</h2>{action}</div>}{children}</Card> }
export function Button({ children, className = '', variant = 'primary', ...props }) { return <button className={`button button--${variant} ${className}`.trim()} {...props}>{children}</button> }
export const IconButton = forwardRef(function IconButton({ label, children, className = '', ...props }, ref) { return <button ref={ref} className={`icon-button ${className}`.trim()} aria-label={label} title={label} {...props}>{children}</button> })
export function PageHeader({ eyebrow, title, description, actions }) { return <header className="page-header"><div>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h1>{title}</h1>{description && <p className="page-header__description">{description}</p>}</div>{actions && <div className="page-header__actions">{actions}</div>}</header> }
