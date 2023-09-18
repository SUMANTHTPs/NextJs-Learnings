export default function UserProfile({ params }: any) {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1>User profile</h1>
            <p>{params.id}</p>
        </div>
    )
}