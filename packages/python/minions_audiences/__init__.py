"""
Minions Audiences Python SDK

Ideal customer profiles, niche definitions, market segments, and target audience personas
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Audiences.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
