import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
// import HomeIcon from '@mui/icons-material/Home';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip; // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591


export const ProgressBar = () => {
  const router = useRouter();
  const stage = useMemo(() => router.query.stage, [router.query.stage])

  const handleClick = (value: string) => {
    router.push(`${router.query.slug}?stage=${value}`, undefined, { shallow: true })
  }

  return (
    <div role="presentation" >
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component="a"
          onClick={(e) => handleClick('1')}
          label="Applied tenants"
          variant={stage == '1' || stage == undefined ? 'outlined' : 'filled'}
          disabled={stage !== '1' && stage !== undefined}
        />
        <StyledBreadcrumb
          onClick={(e) => handleClick('2')}
          variant={stage == '2' ? 'outlined' : 'filled'}
          disabled={stage !== '2'}
          component="a"
          label="Contract Start" />
        <StyledBreadcrumb
          label="Contract Progress"
          component="a"
          onClick={(e) => handleClick('3')}
          disabled={stage !== '3'}
          variant={stage == '3' ? 'outlined' : 'filled'}
        />
        <StyledBreadcrumb
          onClick={(e) => handleClick('4')}
          disabled={stage !== '4'}
          variant={stage == '4' ? 'outlined' : 'filled'}
          component="a"
          label="Contract End"
        />
      </Breadcrumbs>
    </div>
  );
}
