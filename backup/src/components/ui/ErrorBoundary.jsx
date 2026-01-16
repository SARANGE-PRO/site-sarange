import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    handleReload = () => {
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className="min-h-[50vh] flex flex-col items-center justify-center p-6 text-center bg-slate-50 rounded-3xl border border-slate-200 m-4">
                    <div className="bg-red-100 p-4 rounded-full mb-4">
                        <AlertTriangle size={48} className="text-red-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Oups, une erreur est survenue !</h2>
                    <p className="text-slate-600 mb-6 max-w-md">
                        Une erreur inattendue s'est produite. Cela peut être dû à un problème de connexion ou une mise à jour du site.
                    </p>

                    <div className="bg-white p-4 rounded-xl border border-red-100 mb-6 w-full max-w-lg overflow-auto text-left hidden md:block">
                        <code className="text-xs text-red-800 break-words font-mono">
                            {this.state.error && this.state.error.toString()}
                        </code>
                    </div>

                    <button
                        onClick={this.handleReload}
                        className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-black transition-colors shadow-lg shadow-slate-900/20 active:scale-95"
                    >
                        <RefreshCw size={20} />
                        Recharger la page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
