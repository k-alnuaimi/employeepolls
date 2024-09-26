import { AuthProvider } from "../AuthContext";
import ProvidersWithoutAuth from "./ProvidersWithoutAuth";

const Providers = ({ store, router }) => {

    return <AuthProvider>
        <ProvidersWithoutAuth store={store} router={router} />
    </AuthProvider>
}

export default Providers;