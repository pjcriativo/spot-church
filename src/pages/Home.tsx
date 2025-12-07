import { Church } from 'lucide-react'
import './Home.css'

export default function Home() {
    return (
        <div className="home">
            {/* Header */}
            <header className="header">
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <Church size={32} />
                            <span>SPOT CHURCH</span>
                        </div>
                        <nav className="nav">
                            <a href="#inicio">Início</a>
                            <a href="#sobre">Sobre</a>
                            <a href="#contato">Contato</a>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Bem-vindo ao <span className="gradient-text">SPOT CHURCH</span>
                        </h1>
                        <p className="hero-description">
                            Uma plataforma moderna para conectar comunidades, compartilhar fé e crescer espiritualmente juntos.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn btn-primary">
                                Começar Agora
                            </button>
                            <button className="btn btn-secondary">
                                Saiba Mais
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features" id="sobre">
                <div className="container">
                    <h2 className="section-title">Recursos da Plataforma</h2>
                    <div className="features-grid">
                        <div className="card feature-card">
                            <div className="feature-icon">📖</div>
                            <h3>Estudos Bíblicos</h3>
                            <p>Acesse estudos aprofundados e materiais de qualidade para seu crescimento espiritual.</p>
                        </div>
                        <div className="card feature-card">
                            <div className="feature-icon">🎵</div>
                            <h3>Louvor e Adoração</h3>
                            <p>Compartilhe e descubra músicas que edificam e inspiram sua jornada de fé.</p>
                        </div>
                        <div className="card feature-card">
                            <div className="feature-icon">👥</div>
                            <h3>Comunidade</h3>
                            <p>Conecte-se com outros membros, participe de grupos e fortaleça sua rede de apoio.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-logo">
                            <Church size={24} />
                            <span>SPOT CHURCH</span>
                        </div>
                        <p className="footer-text">
                            © 2024 SPOT CHURCH. Todos os direitos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
