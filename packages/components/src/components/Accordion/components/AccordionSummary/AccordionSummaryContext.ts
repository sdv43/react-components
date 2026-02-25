import { createContext } from 'react';

import type { ContextValue, AriaButtonProps } from '@koobiq/react-primitives';

type AccordionSummaryContextValue = ContextValue<
  AriaButtonProps<'button'>,
  HTMLButtonElement
>;

export const AccordionSummaryContext =
  createContext<AccordionSummaryContextValue>(null);
