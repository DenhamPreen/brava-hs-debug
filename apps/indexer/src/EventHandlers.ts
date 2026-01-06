import { ERC20 } from '../generated';

ERC20.Transfer.handler(async ({ event, context }) => {
  const { from, to, value } = event.params;

  context.TransferEvent.set({
    id: `${event.block.number}-${event.logIndex}`,
    from,
    to,
    value: value.toString(),
    blockNumber: event.block.number,
    blockTimestamp: event.block.timestamp,
  });
});

