/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { AzureTreeDataProvider, IAzureNode } from 'vscode-azureextensionui';
import { WorkflowTreeItem } from '../tree/WorkflowTreeItem';

export async function openInPortal(tree: AzureTreeDataProvider, node?: IAzureNode<WorkflowTreeItem>): Promise<void> {
    if (!node) {
        node = <IAzureNode<WorkflowTreeItem>>await tree.showNodePicker(WorkflowTreeItem.contextValue);
    }

    node.openInPortal();
}
