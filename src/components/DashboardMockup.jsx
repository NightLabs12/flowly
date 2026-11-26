import { useEffect, useState } from 'react'
import { FlowMark } from './Mark.jsx'
import { useLanguage } from '../i18n/index.jsx'

const projects = [
  { owner: 'AR', done: 72, tone: 'violet' },
  { owner: 'DN', done: 45, tone: 'navy' },
  { owner: 'MS', done: 88, tone: 'violet' },
]

const tasks = [
  { tone: 'high', done: true },
  { tone: 'medium', done: false },
  { tone: 'low', done: false },
]

function Overview() {
  const { t } = useLanguage()
  const m = t.mockup

  return (
    <>
      <div className="mock-stats">
        <div className="mock-stat">
          <span className="mock-stat-label">{m.openTasks}</span>
          <strong>12</strong>
        </div>
        <div className="mock-stat">
          <span className="mock-stat-label">{m.dueThisWeek}</span>
          <strong>4</strong>
        </div>
        <div className="mock-stat">
          <span className="mock-stat-label">{m.completed}</span>
          <strong>28</strong>
        </div>
      </div>
      <div className="mock-panel">
        <div className="mock-panel-head">
          <span className="mock-panel-title">{m.today}</span>
          <span className="mock-pill">{m.demoData}</span>
        </div>
        <ul className="mock-task-list">
          {tasks.map((task, index) => (
            <li key={index}>
              <span className={task.done ? 'mock-check is-done' : 'mock-check'} aria-hidden="true" />
              <span className="mock-task-label">{m.tasks[index]}</span>
              <span className={`mock-priority ${task.tone}`}>{m.priorities[index]}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

function Tasks() {
  const { t } = useLanguage()
  const m = t.mockup
  const [checked, setChecked] = useState([true, false, false])

  function toggle(index) {
    setChecked((current) => current.map((value, i) => (i === index ? !value : value)))
  }

  return (
    <div className="mock-panel">
      <div className="mock-panel-head">
        <span className="mock-panel-title">{m.allTasks}</span>
        <span className="mock-pill">{m.demoData}</span>
      </div>
      <ul className="mock-task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            <button
              className={checked[index] ? 'mock-check is-done' : 'mock-check'}
              type="button"
              aria-pressed={checked[index]}
              aria-label={`${checked[index] ? m.markIncomplete : m.markComplete}: ${m.tasks[index]}`}
              onClick={() => toggle(index)}
            />
            <span className="mock-task-label">{m.tasks[index]}</span>
            <span className="mock-project-tag">{m.taskProjects[index]}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Progress() {
  const { t } = useLanguage()
  const m = t.mockup
  const [filled, setFilled] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setFilled(true), 80)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="mock-panel">
      <div className="mock-panel-head">
        <span className="mock-panel-title">{m.projectProgress}</span>
        <span className="mock-pill">{m.demoData}</span>
      </div>
      <ul className="mock-progress-list">
        {projects.map((project, index) => (
          <li key={index}>
            <div className="mock-progress-top">
              <span className="mock-avatar">{project.owner}</span>
              <span className="mock-progress-name">{m.projects[index]}</span>
              <span className="mock-progress-value">{project.done}%</span>
            </div>
            <div className="mock-track">
              <span
                className={project.tone === 'violet' ? 'mock-fill is-violet' : 'mock-fill'}
                style={{ '--fill': filled ? project.done / 100 : 0 }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Calendar() {
  const { t } = useLanguage()
  const m = t.mockup

  return (
    <div className="mock-panel">
      <div className="mock-panel-head">
        <span className="mock-panel-title">{m.thisWeek}</span>
        <span className="mock-pill">{m.demoData}</span>
      </div>
      <div className="mock-calendar">
        {m.days.map((day, index) => (
          <div className="mock-day" key={`${day}-${index}`}>
            <span className="mock-day-name">{day}</span>
            <span className={index === 2 ? 'mock-day-num is-today' : 'mock-day-num'}>
              {index + 11}
            </span>
            <span className={index === 1 || index === 4 ? 'mock-dot' : 'mock-dot is-empty'} />
          </div>
        ))}
      </div>
    </div>
  )
}

const views = {
  overview: Overview,
  tasks: Tasks,
  progress: Progress,
  calendar: Calendar,
}

export default function DashboardMockup({ view = 'overview', compact = false }) {
  const { t } = useLanguage()
  const m = t.mockup
  const View = views[view] || Overview

  return (
    <div className={compact ? 'mock-window is-compact' : 'mock-window'}>
      <div className="mock-topbar">
        <FlowMark />
        <span className="mock-brand">{m.brand}</span>
        <span className="mock-topbar-spacer" />
        <span className="mock-window-label">{m.windowLabel}</span>
      </div>
      <div className="mock-body">
        <aside className="mock-sidebar" aria-hidden="true">
          <span className="mock-side-item is-active">{m.sidebar[0]}</span>
          <span className="mock-side-item">{m.sidebar[1]}</span>
          <span className="mock-side-item">{m.sidebar[2]}</span>
          <span className="mock-side-item">{m.sidebar[3]}</span>
        </aside>
        <div className="mock-main">
          <div className="mock-main-head">
            <div>
              <span className="mock-greeting">{m.greeting}</span>
              <p className="mock-title">{m.workspace}</p>
            </div>
            <span className="mock-avatar is-large">AR</span>
          </div>
          <View />
        </div>
      </div>
    </div>
  )
}
