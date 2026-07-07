import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/layout')({
    component: AppLayout,
})

function AppLayout() {
    return (
        <div>
            <Outlet />
        </div>
    )
}
