import { Link, VisuallyHidden, useColorModeValue } from '@chakra-ui/react';

const SocialButton = ({ children, label, href }) => {
  return (
    <Link
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      cursor={'pointer'}
      as={'a'}
      href={href}
      fontSize="2xl"
      display={'inline-flex'}
      target="_blank"
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        transform: 'scale(1.2)',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Link>
  );
};
export default SocialButton;
