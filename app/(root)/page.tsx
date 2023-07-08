import {UserButton} from "@clerk/nextjs";

const SetupPage = () => {
    return (
        <div className="p-4">
            This is the setup page
            <UserButton afterSignOutUrl="/" />
        </div>
    )
}
export default SetupPage;
