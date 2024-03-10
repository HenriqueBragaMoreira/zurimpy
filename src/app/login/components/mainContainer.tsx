import { Smile } from 'lucide-react';
import { CardContainer } from './cardContainer';
import { Header } from './header';

export function MainContainer() {
  return (
    <div>
      <Header />
      <CardContainer
        icon={<Smile size={50} color="white" />}
        title="Sign in to Zurimpy"
        subtitle="Dont have an account ?"
      >
        ef
      </CardContainer>
    </div>
  );
}
