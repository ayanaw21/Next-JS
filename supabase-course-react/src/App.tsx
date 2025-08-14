import TaskManger from "./components/task-manager";
import "./App.css";
import Auth from "./components/auth";
import { useEffect, useState } from "react";
import { supabase } from "./supabase-client";
function App() {
	const [session, setSession] = useState<any>(null);
	const fetchSession = async () => {
		const currentSession = await supabase.auth.getSession();
		setSession(currentSession.data.session);
	};
	useEffect(() => {
		fetchSession();
    const {data:authListener} = supabase.auth.onAuthStateChange((_event,session)=>{
      setSession(session)
    })
    return ()=>{
      authListener.subscription.unsubscribe()
    }
	}, []);
	const logout = async () => {
    await supabase.auth.signOut()
    
  };
	return (
		<>
			{session ? (
				<>
					<button onClick={logout}>logout</button>
					<TaskManger session={session } />
				</>
			) : (
				<Auth />
			)}
		</>
	);
}

export default App;
