import React from 'react';
import { Footer } from './footer.styles';

export const FooterComponent: React.FC = () => {
    return (
        <Footer>
            Todos os Direitos Reservados © {new Date().getFullYear()}
        </Footer>
    );
};
