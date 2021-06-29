import React from 'react';
import { AntdFooter } from './footer.styles';

export const FooterComponent: React.FC = () => {
    return (
        <AntdFooter>
            Todos os Direitos Reservados © {new Date().getFullYear()}
        </AntdFooter>
    );
};
