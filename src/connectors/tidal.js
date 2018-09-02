'use strict';

Connector.playerSelector = '[data-test-id="footer-player"]';

Connector.trackArtSelector = '[data-test-id="current-media-imagery"]';

Connector.trackSelector = `${Connector.playerSelector} [data-test-id="footer-track-title"]`;

Connector.artistSelector = `${Connector.playerSelector} [data-test-id="grid-item-detail-text-title-artist"]`;

Connector.playButtonSelector = `${Connector.playerSelector} [data-test-id="play"]`;

Connector.currentTimeSelector = '[data-test-id="duration"] time:eq(0)';

Connector.durationSelector = '[data-test-id="duration"] time:eq(1)';
