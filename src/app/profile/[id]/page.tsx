export default function UserProfile({ params }: any) {
    return (
        <section>
            <h1>User profile</h1>
            <p>{params.id}</p>
        </section>
    )
}